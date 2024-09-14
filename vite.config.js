import { defineConfig } from 'vite'
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';
import { bundle } from 'lightningcss';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    //transformer: 'lightningcss',
    transform: "postCss",
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
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

