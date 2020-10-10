const VerifyUserMiddleware = require('./middlewares/verify.user.middleware');
const AuthValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const AuthorizationController = require('./controllers/authorization.controllers');

exports.routesConfig = (app) => {

    app.post('/auth', [
        VerifyUserMiddleware.hasAuthValidFields,
        VerifyUserMiddleware.isMatchPasswordUser,
        AuthorizationController.login
    ]);


    app.post('/auth/refresh', [
        AuthValidationMiddleware.validJWTNeeded,
        AuthValidationMiddleware.verifyRefreshBodyField,
        AuthValidationMiddleware.validRefreshNeeded,
        AuthorizationController.login
    ]);


}