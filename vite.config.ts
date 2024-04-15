import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "process.env.API_URL": JSON.stringify(env.API_URL),
      "process.env.VITE_CLERK_PUBLISHABLE_KEY": JSON.stringify(env.VITE_CLERK_PUBLISHABLE_KEY),
    },
  };
});
