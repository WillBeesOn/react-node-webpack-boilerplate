# react-node-webpack-starterpack
A starter pack to set up a React app using a Node/Express backend, all bundled using Webpack.

## Getting started
1. Run `npm install`.
2. Create a `.env` file that specifies a port. (ie `PORT=8000`)
3. Run `npm start`.
4. Navigate to `localhost:8000`

## npm scripts
Here is a breakdown of the included npm scripts
* `start` - builds Node backend with Webpack, watches the `server` directory for changes to rebuild backend, and runs nodemon to monitor changes in the build folder to restart server
* `nodemon` - starts nodemon to inspect server built by Webpack
* `watch-server` - 
