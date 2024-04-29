import Project from "./Project";
import { useEffect, useState } from "react";
import { projectsService } from "../services/projects.service";
import { useValueStore } from "../store/valueStore";
import { useAuth } from "@clerk/clerk-react";
import ProjectProposal from "./ProjectProposal";
import Loader from "./Loader";

function ProjectsContainer() {
  const token = useAuth();

  const { navBarProjects, setTodayProjects, todayProjects, query } =
    useValueStore((state) => ({
      navBarProjects: state.navBarProjects,
      setTodayProjects: state.setTodayProjects,
      todayProjects: state.todayProjects,
      query: state.query,
    }));

  const [currentPage, setCurrentPage] = useState(1);

  // Dentro de ProjectsContainer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await projectsService.getTodayProjects(currentPage);

        if (
          response?.data.length > 0 &&
          !todayProjects.some((project) =>
            response?.data.some(
              (newProject: { name: string }) => newProject.name === project.name
            )
          )
        ) {
          setTodayProjects((prevItems) => [...prevItems, ...response?.data]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage, setTodayProjects, todayProjects]);

  const handleShowMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {todayProjects.length > 0 ? (
        <main className="flex flex-col gap-5">
          {token.userId ? (
            <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
              <ProjectProposal />
            </div>
          ) : null}
          <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
            <p className="satoshi-bold text-left text-2xl mb-3">
              Proyectos de hoy - {new Date().toLocaleDateString()}
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
                {todayProjects.map((project, index) => (
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

            <button
              onClick={handleShowMore}
              className="bg-[#FFD59A] border-[1px] border-[#A56021]  py-2 px-4 rounded-md mt-5 hover:bg-[#A56021] hover:text-white transition-all"
            >
              Mostrar más
            </button>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProjectsContainer;
