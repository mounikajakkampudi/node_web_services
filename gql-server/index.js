const express = require('express')
const app = express()
const port = 4000
const config = require('./config/config')
const https = require('https')
const fs = require('fs')
const router = require('./routes');
const bodyParser = require('body-parser');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
	extended: true
}));

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


/* Setup route */
router.set(app);

/* Setup swagger */
const swaggerSpec = require('./public/swagger-docs/swagger')
const swaggerUi = require('swagger-ui-express');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(app.route);

/* Start Server */
if (config.server_security_type == 'http') {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
} else {
   
    const options = {
        key: fs.readFileSync('./ssl_keys/server.key'),
        cert: fs.readFileSync('./ssl_keys/prod.crt'),
        ca: fs.readFileSync('./ssl_keys/gd_bundle-g2-g1.crt')
    };
    var server = https.createServer(options, app);
    server.listen(port, () => {
        console.log(`Example app listening at https://localhost:${port}`)
    })
}