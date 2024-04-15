import { useEffect } from "react";
import { projectsService } from "../services/projects.service";
import { useValueStore } from "../store/valueStore";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function NavBar() {
  const { setNavBarProjects } = useValueStore((state) => ({
    setNavBarProjects: state.setNavBarProjects,
  }));

  const { query, setQuery } = useValueStore((state) => ({
    query: state.query,
    setQuery: state.setQuery,
  }));

  useEffect(() => {
    if (query.length >= 1) {
      const fetchData = async () => {
        try {
          const projectsData = await projectsService.searchProjectsByName(
            query
          );
          setNavBarProjects(projectsData?.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [query, setNavBarProjects]);

  return (
    <nav className="w-full bg-white p-3 border-b-2">
      <section className="grid md:grid-cols-[1fr_1fr_1fr] max-w-[1600px] m-auto items-center">
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-3xl">Tu próximo proyecto</h1>
          <img src="/images/coffee_image.png" alt="coffee image" />
        </div>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="search"
          name=""
          id=""
          className="bg-[#D9D9D9] rounded-md h-[40px] p-3"
          placeholder="Busca un proyecto..."
        />
        <div className="m-auto">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
