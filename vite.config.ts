import { defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // Prevents TypeScript files from being exposed
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  base: "/shailendrashrestha-cv/"
});
