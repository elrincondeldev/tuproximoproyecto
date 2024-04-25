import { useValueStore } from "../../store/valueStore";
import { useEffect, useState } from "react";
import { projectsService } from "../../services/projects.service";
import Project from "../Project";
import Loader from "../Loader";

function Backend() {
  const { navBarProjects, setBackendProjects, backendProjects, query } =
    useValueStore((state) => ({
      navBarProjects: state.navBarProjects,
      setBackendProjects: state.setBackendProjects,
      backendProjects: state.backendProjects,
      query: state.query,
    }));

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await projectsService.getBackendProjects(currentPage);

        setBackendProjects((prevItems) => [...prevItems, ...response?.data]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const navBarBackendProjects = navBarProjects.filter(
    (project) => project.category === "backend"
  );

  const handleShowMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {backendProjects.length > 0 ? (
        <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
          <p className="satoshi-bold text-left text-2xl mb-3">
            Proyectos de backend
          </p>
          <hr className="mb-5" />
          {query.length >= 1 ? (
            <>
              {navBarBackendProjects.map((project, index) => (
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
              {backendProjects.map((project, index) => (
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
            className="bg-[#FFD59A] border-[1px] border-[#A56021]  py-2 px-4 hover:bg-[#A56021] hover:text-white transition-all rounded-md mt-5"
          >
            Mostrar más
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Backend;
