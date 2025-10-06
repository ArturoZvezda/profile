import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://arturozvezda.github.io/profile/",
  base: "/profile/",
  vite: {
    plugins: [tailwindcss()],
  },
});
