import { create } from "zustand";

type Project = {
  name: string;
  description: string;
  type: boolean;
  category: string;
  votes: number;
};

export interface Values {
  navBarProjects: Project[];
  setNavBarProjects: (projects: []) => void;
  projects: Project[];
  setProjects: (projects: []) => void;
  query: string;
  setQuery: (query: string) => void;
  TermsAndConditionsNewsletterIsOpen: boolean;
  setTermsAndConditionsNewsletterIsOpen: (isOpen: boolean) => void;
}

export const useValueStore = create<Values>((set) => ({
  navBarProjects: [],
  setNavBarProjects: (projects) => set({ navBarProjects: projects }),
  projects: [],
  setProjects: (projects) => set({ projects: projects }),
  query: "",
  setQuery: (query) => set({ query: query }),
  TermsAndConditionsNewsletterIsOpen: false,
  setTermsAndConditionsNewsletterIsOpen: (
    setTermsAndConditionsNewsletterIsOpen
  ) =>
    set({
      TermsAndConditionsNewsletterIsOpen: setTermsAndConditionsNewsletterIsOpen,
    }),
}));
