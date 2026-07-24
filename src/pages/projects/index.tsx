import React from 'react';

import {getSortedPostsData} from '@/lib/projects';
import ProjectsList from "@/components/Projects/ProjectsList";
import SEO from "@/components/SEO.tsx";

import {Project} from "@/types/project.ts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type ProjectsHomeProps = {
  allPostsData: Project[]
}

const ProjectsHome = ({allPostsData}: ProjectsHomeProps) => {

  return (
    <>
      <SEO
        title="Projects"
        description="Production and experimental products, from early MVPs to shipped tools."
        keywords="projects, products, portfolio, apps, tools"
        canonicalPath="/projects"
      />
      <ProjectsList posts={allPostsData}/>
    </>
  )
};

export default ProjectsHome;
