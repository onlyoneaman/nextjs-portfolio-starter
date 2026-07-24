import ContainerTitle from "@/components/Common/ContainerTitle";
import EmailButton from "@/components/Common/EmailButton";
import GetInTouchButton from "@/components/Common/GetInTouchButton";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { siteConfig } from "@/config/site.config";

const SKILLS = ["React", "Next.js", "TypeScript", "Node.js", "Postgres", "Redis"];

const SECTIONS = [
  {
    title: "Who I Am",
    content: siteConfig.bio,
  },
  {
    title: "What I Do",
    content: `${siteConfig.name} is a ${siteConfig.role}. This is placeholder copy. Edit it in src/components/AboutPage.tsx to describe the work you do and the products you build.`,
  },
  {
    title: "My Journey",
    content: `Add your story here. Summarize the roles, projects, and milestones that shaped how you build today. This is placeholder text you can replace with your own journey.`,
  },
  {
    title: "Thesis",
    content: `Share what you believe about your craft and where things are heading. This is placeholder copy. Replace it with your own point of view.`,
  },
  {
    title: "Beyond Code",
    content: `A line or two about what you enjoy outside of work. Hobbies, interests, and anything that makes you you.`,
  },
];

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto relative md:p-8 rounded-2xl">
      <BackgroundBeams />

      <div className="relative z-10 space-y-2 md:space-y-6">
        <ContainerTitle title={siteConfig.name} />

        <h3 className="text-sm uppercase tracking-wide text-gray-500">
          {siteConfig.role}
        </h3>

        <ul className="flex flex-wrap gap-1 md:gap-2">
          {SKILLS.map((skill) => (
            <li key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-xs">
              {skill}
            </li>
          ))}
        </ul>

        {SECTIONS.map(({ title, content }) => (
          <section key={title} className="md:space-y-1">
            <h4 className="md:text-lg font-semibold">{title}</h4>
            <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        ))}

        <div className="flex gap-4 pt-4">
          <GetInTouchButton />
          <EmailButton />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
