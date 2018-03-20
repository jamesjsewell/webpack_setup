# webpack_setup
setup that includes a build tool and a dev server. Has HMR or hot module replacement while coding so you don't have to refresh the browser when you make a change to your code. Processes the sass you write into minified css, and uses postcss which does auto-prefixing so you don't have to bother with typing prefixes for cross browser support.

* npm install
* npm run start, starts the dev server and opens your app in a new browser tab
* npm run build, populates a dist folder with the minified js bundle, minified css, and the html file. Use these files in production

I developed this by reading the documentation straight from the webpack website. https://webpack.js.org/
This is webpack 4. 
