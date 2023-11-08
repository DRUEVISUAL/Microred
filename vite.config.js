import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  // base: "https://druevisual.github.io/Microred/index.html",
  plugins: [react()],
});
