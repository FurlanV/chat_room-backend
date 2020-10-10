const jwt = require('jsonwebtoken');
const secret = require('../config/env.config').jwt_secret;

const ADM_PERMISSION = 4096;

exports.minimumPermissionLevelRequired = (required_permission) => {
    return (req, res, next) => {

        let user_permission_level = parseInt(req.jwt.permissionLevel);

        if (user_permission_level & required_permission) {
            return next();
        } else {
            return res.status(403).send();
        }
    };
};

exports.onlyAdminOrUser = (req, res, next) => {

    let user_permission_level = parseInt(req.jwt.permissionLevel);
    let userId = req.jwt.userId;

    if (req.params && req.params.userId && req.params.userId === userId) {
        return next();
    } else {
        if (user_permission_level & ADM_PERMISSION) {
            return next();
        } else {
            return res.status(403).send();
        }
    }
}

exports.onlySameUser = (req, res, next) => {

    let userId = req.jwt.userId;

    if (req.params.userId !== userId) {

        return next();
    } else {
        return res.status(400).send();
    }
}