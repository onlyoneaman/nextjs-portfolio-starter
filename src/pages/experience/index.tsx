import React from 'react';
import experiencesData from "@/data/experiencesData.ts";
import { Timeline } from '@/components/ui/timeline';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site.config";

const JourneyPage: React.FC = () => {

  const timelineData = experiencesData.map((exp) => ({
    title: exp.date,
    content: (
      <div
        className='flex flex-col gap-2 text-sm'
      >
        <span className='text-md md:text-lg lg:text-xl text-black'>
          {exp.role} &middot; {exp.companyName}
        </span>
        <span className='text-md text-gray-500'>
          {exp.description}
        </span>
        {exp.points && exp.points.length > 0 && (
          <ul className="text-gray-700 text-xs md:text-sm space-y-2">
            {exp.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          )}
          {exp.techStack && exp.techStack.length > 0 && (
            <div className="mt-1">
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, index) => (
                  <div
                    className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md border border-gray-200'
                    key={index}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    )
  }))

  return (
    <>
      <SEO
        title="Experience"
        description={`Work history and background for ${siteConfig.name}.`}
        keywords={`${siteConfig.name}, experience, career, work history`}
        canonicalPath="/experience"
      />
      <div
        className="mx-auto space-y-3 md:space-y-6"
      >
        <div className="relative w-full overflow-clip">
          <Timeline data={timelineData} />
        </div>

        <div>
          <Link
            className='flex cursor-pointer hover:underline items-center gap-2 py-6'
            href={siteConfig.resume}
            target='_blank'
          >
            View Full Resume <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default JourneyPage;
