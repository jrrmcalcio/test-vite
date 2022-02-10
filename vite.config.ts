import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { laravel } from "vite-plugin-laravel";

export default defineConfig({
    plugins: [vue(), laravel()],
});
