import { http } from "../http";

export const projectsService = {
  getAllProjects: async () => {
    try {
      const request = await http.get(
        `${process.env.API_URL}/projects/get-projects`
      );

      return request;
    } catch (error) {
      console.log(error);
    }
  },
};
