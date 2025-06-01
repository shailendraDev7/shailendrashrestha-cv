import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_URL || "/", // Dynamically set base
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "index.js",
          assetFileNames: "[name].[ext]"
        }
      }
    }
  };
});
