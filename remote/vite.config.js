import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      remotes: {
        remote: "http://localhost:5010/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/components/button/Button",
        "./store": "./store/store",
      },
      shared: {
        jotai: { singleton: true, requiredVersion: "2.12.0" }, // MUST MATCH EXACTLY
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
