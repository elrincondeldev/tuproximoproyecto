import { useValueStore } from "../../store/valueStore";
import { useEffect } from "react";
import { projectsService } from "../../services/projects.service";
import Project from "../Project";

function Frontend() {
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
  }, []);

  const frontendProjects = projects.filter(
    (project) => project.category === "frontend"
  );

  const navBarFrontendProjects = navBarProjects.filter(
    (project) => project.category === "frontend"
  );

  return (
    <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
      <p className="satoshi-bold text-left text-2xl mb-3">
        Proyectos de frontend
      </p>
      <hr className="mb-5" />
      {query.length >= 1 ? (
        <>
          {navBarFrontendProjects.map((project, index) => (
            <div key={index}>
              <Project
                name={project.name}
                description={project.description}
                type={project.type}
                category={project.category}
              />
              <hr className="my-5" />
            </div>
          ))}
        </>
      ) : (
        <>
          {frontendProjects.map((project, index) => (
            <div key={index}>
              <Project
                name={project.name}
                description={project.description}
                type={project.type}
                category={project.category}
              />
              <hr className="my-5" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Frontend;
