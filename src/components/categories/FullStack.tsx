import { useValueStore } from "../../store/valueStore";
import { useEffect, useState } from "react";
import { projectsService } from "../../services/projects.service";
import Project from "../Project";
import Loader from "../Loader";

function FullStack() {
  const { navBarProjects, setFullStackProjects, fullStackProjects, query } =
    useValueStore((state) => ({
      navBarProjects: state.navBarProjects,
      setFullStackProjects: state.setFullStackProjects,
      fullStackProjects: state.fullStackProjects,
      query: state.query,
    }));

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await projectsService.getFullStackProjects(
          currentPage
        );

        if (
          response?.data.projects.length > 0 &&
          !fullStackProjects.some((project) =>
            response?.data.projects.some(
              (newProject: { name: string }) => newProject.name === project.name
            )
          )
        ) {
          setFullStackProjects((prevItems) => [
            ...prevItems,
            ...response?.data.projects,
          ]);
          setTotalPages(response?.data.total_pages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const navBarFullStackProjects = navBarProjects.filter(
    (project) => project.category === "fullstack"
  );

  const handleShowMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {fullStackProjects.length > 0 ? (
        <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
          <p className="satoshi-bold text-left text-2xl mb-3">
            Proyectos fullstack
          </p>
          <hr className="mb-5" />
          {query.length >= 1 ? (
            <>
              {navBarFullStackProjects.map((project, index) => (
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
              {fullStackProjects.map((project, index) => (
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
          {currentPage < totalPages ? (
            <button
              onClick={handleShowMore}
              className="bg-[#FFD59A] border-[1px] border-[#A56021]  py-2 px-4 rounded-md mt-5 hover:bg-[#A56021] hover:text-white transition-all"
            >
              Mostrar más
            </button>
          ) : null}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default FullStack;
