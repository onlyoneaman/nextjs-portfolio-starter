import React from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle";
import ProjectCard from "@/components/Projects/ProjectCard";

import {Project} from "@/types/project.ts";

type ProjectsListProps = {
  posts: Project[]
  minimized?: boolean
}

const ProjectsList = (
  {
    posts,
    minimized = false
  }: ProjectsListProps
) => {
  if (!posts || posts.length === 0) {
    return <p>No projects found.</p>;
  }

  if(minimized) {
    return(
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Project) => (
          <ProjectCard key={post.slug} item={post}/>
        ))}
      </div>
    )
  }

  return (
    <div
      className="mx-auto space-y-2 sm:space-y-3 md:space-y-5"
    >
      <ContainerTitle
        title="Projects"
      />
      <p className="text-sm">
        Playground - Small MVP to Production Apps
      </p>
      <div
        className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6"
      >
        {posts.filter(a => !a.hidden).map((post: Project) => (
          <ProjectCard
            key={post.slug}
            item={post}
          /> 
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
