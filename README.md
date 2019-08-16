# react-node-webpack-boilerplate
A starter pack to set up a React app using a Node/Express backend, all bundled using Webpack.

## Getting started
1. Run `npm install`.
2. Create a `.env` file that specifies a port. (ie `PORT=8000`)
3. Run `npm start`.
4. Navigate to `localhost:8000`

## npm scripts
Here is a breakdown of the included npm scripts
* `start` - runs `nodemon` and `watch-server` in paralell.
* `nodemon` - starts nodemon to inspect server and restart server when a new build is created.
* `watch-server` - builds Node backend with Webpack and watches the `server` directory for changes to rebuild backend.
* `build-prod` - creates a production build of client and server.
* `build-dev` - creates a development build of the server which builds the client with WebpackDevMiddleware.

