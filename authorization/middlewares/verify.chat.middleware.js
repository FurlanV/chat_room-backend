//const ChatModel = require('../../chat/models/chat.model');

//exports.userExists = (req, res, next) => {}

exports.hasValidFields = (req, res, next) => {

    if (req.body) {
        let errors = []

        if (!req.body.user) {
            errors.push("Missing user");
        }

        if (!req.body.message) {
            error.push("Missing Message");
        }

        if (!req.body.timestamp) {
            errors.push("Missing timestamp");
        }


        if (errors.length) {
            return res.status(400).send({ errors: errors.join(',') });
        }
        else {
            return next();
        }

    } else {
        return res.status(400).send({ errors: "Missing Fields" })
    }

}