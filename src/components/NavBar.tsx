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
      <section className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] px-5 max-w-[1600px] m-auto items-center">
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
          className=" rounded-md p-2 border-[1px] boredr-[#D9D9D9]"
          placeholder="Busca un proyecto..."
        />
        <div className="ml-auto ">
          <SignedOut>
            <div className="bg-[#BF6C0D] px-5 py-2 rounded-md satoshi-bold text-white">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </section>
      <section className="md:hidden grid md:grid-cols-[1fr_1fr_1fr] max-w-[1600px] m-auto items-center">
        <div className="flex justify-center items-center gap-5">
          <h1 className="font-bold text-center text-3xl">
            Tu próximo proyecto
          </h1>
          <img src="/images/coffee_image.png" alt="coffee image" />
        </div>
        <div className="flex items-center">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="search"
            name=""
            id=""
            className="bg-[#D9D9D9] rounded-md p-3 w-[80%]"
            placeholder="Busca un proyecto..."
          />
          <div className="ml-auto ">
            <SignedOut>
              <div className="md:flex hidden bg-[#BF6C0D] px-5 py-2 rounded-md satoshi-bold text-white w-[20%]">
                <SignInButton />
              </div>
              <div className="bg-[#BF6C0D] py-2 px-3 rounded-md satoshi-bold text-white w-[100%]">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
