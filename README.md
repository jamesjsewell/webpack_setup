# webpack_setup

 - now supports react - 
setup that includes a build tool and a dev server. Has HMR or hot module replacement while coding so you don't have to refresh the browser when you make a change to your code. Processes the sass you write into minified css, and uses postcss(nextcss, nanocss) which does auto-prefixing so you don't have to bother with typing prefixes for cross browser support. creates source maps for your production code, for the css/js minified files, that way you can accurately debug your app in production.

* npm install
* npm run start, starts the dev server and opens your app in a new browser tab
* npm run build, populates a dist folder with the minified js bundle, minified css, and the html file. Use these files in production, also creates source maps for the minified js/css files

I developed this by reading the documentation straight from the webpack website. https://webpack.js.org/
This is webpack 4
