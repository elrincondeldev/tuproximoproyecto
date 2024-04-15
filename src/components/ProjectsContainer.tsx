import Project from "./Project";
import { useEffect } from "react";
import { projectsService } from "../services/projects.service";
import { useValueStore } from "../store/valueStore";

function ProjectsContainer() {
  const { navBarProjects, setProjects, projects, query } = useValueStore(
    (state) => ({
      navBarProjects: state.navBarProjects,
      setProjects: state.setProjects,
      projects: state.projects,
      query: state.query,
    })
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await projectsService.getAllProjects();
        setProjects(projectsData?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setProjects]);

  return (
    <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
      <p className="satoshi-bold text-left text-2xl mb-3">
        Todos los proyectos
      </p>
      <hr className="mb-5" />
      {query.length >= 1 ? (
        <>
          {navBarProjects.map((project, index) => (
            <div key={index}>
              <Project
                name={project.name}
                description={project.description}
                type={project.type}
                category={project.category}
                votes={project.votes}
              />
              <hr className="my-5" />
            </div>
          ))}
        </>
      ) : (
        <>
          {" "}
          {projects.map((project, index) => (
            <div key={index}>
              <Project
                name={project.name}
                description={project.description}
                type={project.type}
                category={project.category}
                votes={project.votes}
              />
              <hr className="my-5" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ProjectsContainer;
