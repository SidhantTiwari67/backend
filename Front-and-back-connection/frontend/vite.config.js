import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    // Ab yeh proxy append bhi hogi jab /api wala route hit hoga
    // Also, proxy lag jaayegi ki jo request aa rhi hai wo issi URL se aar hi h
  },
  plugins: [react()],
});
