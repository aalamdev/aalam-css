import { defineConfig } from 'vite'
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';
import { bundle } from 'lightningcss';
import path from "path";
import {Plugin} from "./plugin-script";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Plugin()],
  css: {
    //transformer: 'lightningcss',
    transform: "postCss",
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  resolve: {
    alias: {
      "@aalam-wc": path.resolve(__dirname, "./node_modules/aalam-wc/")
    }
  },
  build: {
    rollupOptions: {
        output: {
            assetFileNames: 'aalam.[ext]'
        }
    },
    assetsDir: '.',
    cssMinify: 'lightningcss'
  }
})

