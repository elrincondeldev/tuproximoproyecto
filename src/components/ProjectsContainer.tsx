import Project from "./Project";
import { useEffect, useState } from "react";
import { projectsService } from "../services/projects.service";

type Project = {
  name: string;
  description: string;
  type: boolean;
  category: string;
};

function ProjectsContainer() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    projectsService.getAllProjects().then((response: Project[]) => {
      setProjects(response);
    });
  }, []);

  return (
    <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
      <p className="satoshi-bold text-left text-2xl mb-3">
        Todos los proyectos
      </p>
      <hr className="mb-5" />
      {projects.map((project, index) => (
        <>
          <Project
            index={index + 1}
            name={project.name}
            description={project.description}
            type={project.type}
            category={project.category}
          />
          <hr className="my-5" />
        </>
      ))}
    </div>
  );
}

export default ProjectsContainer;
