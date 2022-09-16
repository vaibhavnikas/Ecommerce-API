// moved all functions to admin_controllers folder to make this file scalable

module.exports.register = require('./admin_controllers/register');

module.exports.createSession = require('./admin_controllers/createSession');