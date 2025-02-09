import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

// /** @type {import('rehype-pretty-code').Options} */
// const options = {
//   // https://rehype-pretty-code.netlify.app
//   theme: {
//     dark: "slack-dark",
//     light: "slack-ochin",
//   },
// };
// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    rehypePlugins: [rehypePrettyCode],
    syntaxHighlight: false,
  },
});
