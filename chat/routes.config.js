const config = require('../common/config/env.config');

const ChatController = require('./controllers/chat.controller');

exports.routesConfig = (app) => {

    app.post('/newMessage', [
        ChatController.insert
    ]);

    app.get('/messages', [
        ChatController.list
    ]);
}