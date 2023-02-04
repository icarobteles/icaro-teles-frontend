import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["src/vitest.setup.ts"],
    environment: "jsdom",
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
    },
    clearMocks: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/"),
    },
  },
});
