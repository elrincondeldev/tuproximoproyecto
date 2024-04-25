import axios from "axios";

export const projectsService = {
  getAllProjects: async (currentPage: number) => {
    try {
      const request = await axios.get(
        `${process.env.API_URL}/projects/get-projects?page=${currentPage}`
      );

      return request;
    } catch (error) {
      console.log(error);
    }
  },

  getFrontendProjects: async (currentPage: number) => {
    try {
      const request = await axios.get(
        `${process.env.API_URL}/projects/get-frontend-projects?page=${currentPage}`
      );

      return request;
    } catch (error) {
      console.log(error);
    }
  },

  getBackendProjects: async (currentPage: number) => {
    try {
      const request = await axios.get(
        `${process.env.API_URL}/projects/get-backend-projects?page=${currentPage}`
      );

      return request;
    } catch (error) {
      console.log(error);
    }
  },

  getFullStackProjects: async (currentPage: number) => {
    try {
      const request = await axios.get(
        `${process.env.API_URL}/projects/get-fullstack-projects?page=${currentPage}`
      );

      return request;
    } catch (error) {
      console.log(error);
    }
  },

  searchProjectsByName: async (name: string) => {
    try {
      const request = await axios.get(
        `${process.env.API_URL}/projects/search-projects-by-name/?search_query=${name}`
      );

      return request;
    } catch (error) {
      console.log(error);
    }
  },

  sendEmail: async (data: any) => {
    try {
      const request = await axios.post(
        `${process.env.API_URL}/newsletter/new-email`,
        data
      );

      return request;
    } catch (error) {
      console.log(error);
    }
  },

  proposeProject: async (data: any, token: string) => {
    try {
      const request = await axios.post(
        `${process.env.API_URL}/proposed-projects/propose-project`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return request;
    } catch (error) {
      console.log(error);
    }
  },

  getNumberOfEmails: async () => {
    try {
      const request = await axios.get(
        `${process.env.API_URL}/newsletter/get-last-id`
      );
      return request;
    } catch (error) {
      console.log(error);
    }
  },
};
