import React, { FC, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Copy, Check } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// RO-RO type for props
export type MarkdownWrapperProps = {
  content: string;
  className?: string;
};

/**
 * CodeBlock component with copy button functionality
 */
const CodeBlock: FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  const [copied, setCopied] = useState(false);
  const codeString = String(children).replace(/\n$/, '');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <pre className="relative group bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-6 text-sm font-mono">
      <div className="absolute top-2 right-2 z-10">
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 hover:bg-gray-700 text-gray-100"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      <code className={className}>
        {children}
      </code>
    </pre>
  );
};

/**
 * Pulls image sources out of the raw markdown, in document order, so each
 * rendered <img> can find its position in the gallery by src.
 * Handles both markdown syntax and raw <img> tags (rehypeRaw is enabled).
 */
const collectImages = (content: string): string[] => {
  const found: string[] = [];
  const push = (src?: string) => {
    if (src && !found.includes(src)) found.push(src);
  };
  const md = /!\[[^\]]*\]\(([^)\s]+)/g;
  const html = /<img[^>]+src=["']([^"']+)["']/g;
  let m: RegExpExecArray | null;
  while ((m = md.exec(content)) !== null) push(m[1]);
  while ((m = html.exec(content)) !== null) push(m[1]);
  return found;
};

/**
 * MarkdownWrapper renders markdown with Tailwind/markdown.css styles.
 * Tables and GFM features are supported and styled via .prose.
 */
const MarkdownWrapper: FC<MarkdownWrapperProps> = ({ content, className }) => {
  const images = useMemo(() => collectImages(content), [content]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openAlt, setOpenAlt] = useState<string>("");

  return (
  <div className={className}>
    <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
        a: ({ node, ...props }) => {
          const href = typeof props.href === 'string' ? props.href : '';
          if (href.startsWith('#')) {
            // Internal anchor link (e.g. Table of Contents)
            return <a {...props} />;
          }
          // External link
          return <a {...props} target="_blank" rel="noopener noreferrer" />;
        },
        h1: ({node, ...props}) => {
          const text = String(props.children).replace(/<[^>]+>/g, '');
          const id = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return <h1 id={id} {...props} />;
        },
        h2: ({node, ...props}) => {
          const text = String(props.children).replace(/<[^>]+>/g, '');
          const id = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return <h2 id={id} {...props} />;
        },
        h3: ({node, ...props}) => {
          const text = String(props.children).replace(/<[^>]+>/g, '');
          const id = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return <h3 id={id} {...props} />;
        },
        h4: ({node, ...props}) => {
          const text = String(props.children).replace(/<[^>]+>/g, '');
          const id = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return <h4 id={id} {...props} />;
        },
        h5: ({node, ...props}) => {
          const text = String(props.children).replace(/<[^>]+>/g, '');
          const id = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return <h5 id={id} {...props} />;
        },
        h6: ({node, ...props}) => {
          const text = String(props.children).replace(/<[^>]+>/g, '');
          const id = text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return <h6 id={id} {...props} />;
        },
        // Responsive scroll wrapper for tables on mobile screens
        table: ({node, ...props}) => (
          <div className="overflow-x-auto max-w-full">
            <table className="min-w-full" {...props} />
          </div>
        ),
        // Force word wrap and alignment in table cells
        th: ({node, ...props}) => (
          <th className="break-words align-top px-2 py-2 text-xs sm:text-sm" {...props} />
        ),
        td: ({node, ...props}) => (
          <td className="break-words align-top px-2 py-2 text-xs sm:text-sm" {...props} />
        ),
        pre: ({ node, children, ...props }: any) => {
          // Extract the code element from pre
          const codeElement = React.Children.toArray(children).find(
            (child: any) => React.isValidElement(child) && (child.type === 'code' || (child.props as any)?.className?.includes('language-'))
          ) as React.ReactElement<{ className?: string; children?: React.ReactNode }> | undefined;
          
          if (codeElement && React.isValidElement(codeElement)) {
            // This is a code block - use CodeBlock component
            const codeProps = codeElement.props;
            return <CodeBlock className={codeProps.className}>{codeProps.children}</CodeBlock>;
          }
          
          // Fallback to default pre rendering
          return <pre {...props}>{children}</pre>;
        },
        code: ({ node, inline, className, children, ...props }: any) => {
          // Inline code - render normally (not wrapped in pre)
          if (inline) {
            return <code className={className} {...props}>{children}</code>;
          }

          // For code blocks, return just the code element
          // The pre component will handle the wrapper
          return <code className={className} {...props}>{children}</code>;
        },
        img: ({ node, ...props }: any) => {
          const src = typeof props.src === 'string' ? props.src : '';
          const alt = typeof props.alt === 'string' ? props.alt : '';
          const idx = images.indexOf(src);
          // Raw HTML images (used for side-by-side rows) carry their own sizing.
          // Only plain markdown images get the default constraint, otherwise the
          // defaults override the authored widths and the row overflows.
          const authored = typeof props.className === 'string' && props.className.trim().length > 0;
          const defaults = authored ? '' : ' rounded-lg max-h-[70vh] w-auto mx-auto';
          return (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              {...props}
              alt={alt}
              loading="lazy"
              onClick={() => { if (idx >= 0) { setOpenAlt(alt); setOpenIndex(idx); } }}
              className={`${props.className || ''} cursor-zoom-in transition hover:opacity-90${defaults}`.trim()}
            />
          );
        },
        span: ({ node, ...props }: any) => {
          // Check if this span has a data-tooltip attribute
          const tooltip = (node?.properties as any)?.['data-tooltip'] || (props as any)['data-tooltip'];
          if (tooltip) {
            const { 'data-tooltip': _, ...restProps } = props as any;
            return (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="border-b border-dashed border-gray-800 cursor-help border-solid" {...restProps}>
                    {props.children}
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900 text-white max-w-[350px] text-sm">
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            );
          }
          return <span {...props} />;
        }
      }}
    >
      {content}
    </ReactMarkdown>

    {openIndex !== null && (
      <Lightbox
        images={images}
        index={openIndex}
        alt={openAlt}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    )}
  </div>
  );
};

export default MarkdownWrapper;