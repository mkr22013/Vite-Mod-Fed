import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteapp: "http://localhost:5010/dist/assets/remoteEntry.js",
      },
      shared: {
        react: { singleton: true }, // If sharing React
        "react-dom": { singleton: true }, // If sharing React
        // ... other shared dependencies
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
