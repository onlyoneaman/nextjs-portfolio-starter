import React, { FC, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxProps = {
  images: string[];
  index: number;
  alt?: string;
  onClose: () => void;
  onNavigate: (next: number) => void;
};

/**
 * Full-screen image viewer. Arrow keys / on-screen chevrons cycle through
 * `images`; Escape or a click outside the figure closes it.
 */
const Lightbox: FC<LightboxProps> = ({ images, index, alt, onClose, onNavigate }) => {
  const count = images.length;
  const go = useCallback(
    (delta: number) => onNavigate((index + delta + count) % count),
    [index, count, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [go, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
      >
        <X className="h-6 w-6" />
      </button>

      {count > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      <figure
        className="max-h-full max-w-full flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={alt || ""}
          className="max-h-[85vh] max-w-full object-contain rounded"
        />
        {(alt || count > 1) && (
          <figcaption className="text-center text-sm text-white/60">
            {alt}
            {count > 1 && <span className="ml-2 text-white/40">{index + 1} / {count}</span>}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Lightbox;
