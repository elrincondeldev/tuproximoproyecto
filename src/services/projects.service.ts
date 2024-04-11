import axios from 'axios';

export const projectsService = {
  getAllProjects: async () => {
    try {
      const request = await axios.get(
        `${process.env.API_URL}/projects/get-projects`
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
};
