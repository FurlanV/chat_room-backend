const chatModel = require("../models/chat.model");

exports.insert = (req,res) => {
    chatModel.createMessage(req.body).then((result) => {
        res.status(201).send({'message' : 'Success! Message sent!'});
    })
}

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;

    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }

    chatModel.list(limit, page).then((result) => {
        res.status(200).send(result);
    })
};