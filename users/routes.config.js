const config = require('../common/config/env.config');

const UsersController = require('./controllers/users.contoller');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');

const NO_SIGNED_USER = config.permissionLevels.NO_SIGNED_USER;

exports.routesConfig = (app) => {

    app.post('/newUser', [
        UsersController.insert
    ]);

    app.get('/users', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(NO_SIGNED_USER),
        UsersController.list
    ]);

    app.get('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.getById
    ]);

}