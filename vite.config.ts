import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        //remote: "https://vite-mfe-demo-remote.vercel.app/assets/remoteEntry.js",
        // 5173 - Dashboard micro app port
        dashboard: "http://localhost:5173/assets/remoteEntry.js"
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
