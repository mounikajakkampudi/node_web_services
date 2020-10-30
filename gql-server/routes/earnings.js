'use strict';
const controller = require('../controllers/earnings');

module.exports = function (app) {
    app.route('/earnings')
        .get(controller.getAllEarnings);
    app.route('/earnings/:user_id')
        .get(controller.getAllEarnings);
        
};
