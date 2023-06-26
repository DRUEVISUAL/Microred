import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  base: "https://DRUEVISUAL.github.io/Microred",
  plugins: [react()],
});
