import { create } from "zustand";

export type ProjectInterface = {
  name: string;
  description: string;
  type: boolean;
  category: string;
  votes: number;
  created_at: string;
};

export interface Values {
  navBarProjects: ProjectInterface[];
  setNavBarProjects: (projects: []) => void;
  projects: ProjectInterface[];
  setProjects: (
    update: (prevProjects: ProjectInterface[]) => ProjectInterface[]
  ) => void;
  todayProjects: ProjectInterface[];
  setTodayProjects: (
    update: (prevProjects: ProjectInterface[]) => ProjectInterface[]
  ) => void;
  frontendProjects: ProjectInterface[];
  setFrontendProjects: (
    update: (prevProjects: ProjectInterface[]) => ProjectInterface[]
  ) => void;
  backendProjects: ProjectInterface[];
  setBackendProjects: (
    update: (prevProjects: ProjectInterface[]) => ProjectInterface[]
  ) => void;
  fullStackProjects: ProjectInterface[];
  setFullStackProjects: (
    update: (prevProjects: ProjectInterface[]) => ProjectInterface[]
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
  todayProjects: [],
  setTodayProjects: (update) =>
    set((state) => ({
      ...state,
      todayProjects: update(state.todayProjects),
    })),
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
