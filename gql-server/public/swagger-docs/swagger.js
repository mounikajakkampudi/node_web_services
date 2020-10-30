const swaggerJSDoc = require('swagger-jsdoc');
const config = require('../../config/config');

const args = process.argv;

const swaggerDefinition = {
  info: {
    title: 'REST API for Athentication', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'REST API document has details on how to access the apis in client components.', // short description of the app
  },
  host: ((args.length > 2 && args[2] === 'dev') ? config.server_host_local : config.server_host)  + ':' + config.server_port,
  basePath: '/' + config.app_name + '/' + config.version,
  schemes:["http", "https"]
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['././public/swagger-docs/**/*.yaml'],
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);
