import { useState } from "react";
import { projectsService } from "../services/projects.service";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";

function ProjectProposal() {
  const [data, setData] = useState({
    name: "",
    description: "",
    votes: 0,
    category: "fullstack",
    type: false,
  });

  const { getToken } = useAuth();

  const onHandleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    toast.error("Esta funcionalidad está deshabilitada por el momento.");

    if (data) {
      try {
        const token = await getToken();

        if (!token) {
          throw new Error("Token JWT no disponible");
        }

        const response = await projectsService.proposeProject(data, token);

        if (response?.status === 200) {
          setData({
            name: "",
            description: "",
            votes: 0,
            category: "fullstack",
            type: false,
          });
          toast.error("Esta funcionalidad está deshabilitada por el momento.");
        }
      } catch (error) {
        console.log(error);
        toast.error("Ha ocurrido un error al enviar el proyecto.");
      }
    }
  };

  return (
    <form
      onSubmit={onHandleClick}
      className="flex flex-col items-center justify-between gap-5"
    >
      <p className="satoshi-bold text-left text-2xl mb-3">Propón un proyecto</p>
      <input
        onChange={(e) => setData({ ...data, name: e.target.value })}
        value={data.name}
        type="text"
        placeholder="Nombre del proyecto"
        className="border-[1px] border-[#E1E3E8] rounded-md py-1 px-3 w-full"
      />
      <textarea
        onChange={(e) => setData({ ...data, description: e.target.value })}
        value={data.description}
        placeholder="Descripción"
        className="border-[1px] border-[#E1E3E8] rounded-md py-1 px-3 w-full h-20"
      ></textarea>
      <select
        className="border-[1px] border-[#E1E3E8] rounded-md py-1 px-3 w-full"
        onChange={(e) => setData({ ...data, category: e.target.value })}
        value={data.category}
      >
        <option value="fullstack">Full Stack</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
      </select>
      <button
        type="submit"
        className="border-[1px] rounded-md py-1 px-5 bg-[#FFD59A] border-[#A56021] hover:bg-[#A56021] hover:text-white transition-all"
      >
        Proponer
      </button>
    </form>
  );
}

export default ProjectProposal;
