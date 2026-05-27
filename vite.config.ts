import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "tailwindcss";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
});
