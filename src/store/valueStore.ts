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
  setProjects: (update: (prevProjects: Project[]) => Project[]) => void;
  frontendProjects: Project[];
  setFrontendProjects: (update: (prevProjects: Project[]) => Project[]) => void;
  backendProjects: Project[];
  setBackendProjects: (update: (prevProjects: Project[]) => Project[]) => void;
  fullStackProjects: Project[];
  setFullStackProjects: (
    update: (prevProjects: Project[]) => Project[]
  ) => void;
  query: string;
  setQuery: (query: string) => void;
  TermsAndConditionsNewsletterIsOpen: boolean;
  setTermsAndConditionsNewsletterIsOpen: (isOpen: boolean) => void;
}

export const useValueStore = create<Values>((set) => ({
  navBarProjects: [],
  setNavBarProjects: (projects) => set({ navBarProjects: projects }),
  projects: [],
  setProjects: (update) =>
    set((state) => ({ ...state, projects: update(state.projects) })),
  frontendProjects: [],
  setFrontendProjects: (update) =>
    set((state) => ({
      ...state,
      frontendProjects: update(state.frontendProjects),
    })),
  backendProjects: [],
  setBackendProjects: (update) =>
    set((state) => ({
      ...state,
      backendProjects: update(state.backendProjects),
    })),
  fullStackProjects: [],
  setFullStackProjects: (update) =>
    set((state) => ({
      ...state,
      fullStackProjects: update(state.fullStackProjects),
    })),
  query: "",
  setQuery: (query) => set((state) => ({ ...state, query: query })),
  TermsAndConditionsNewsletterIsOpen: false,
  setTermsAndConditionsNewsletterIsOpen: (
    setTermsAndConditionsNewsletterIsOpen
  ) =>
    set((state) => ({
      ...state,
      TermsAndConditionsNewsletterIsOpen: setTermsAndConditionsNewsletterIsOpen,
    })),
}));
