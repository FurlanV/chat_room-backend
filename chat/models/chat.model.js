const mongoose = require("../../common/services/mongoose.services").mongoose;
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    userId: String,
    username: String,
    message: String,
    avatar: String,
    timestamp: String
});

const Chat = mongoose.model('Chat', chatSchema);

exports.createMessage = (data) => {
    const msg = new Chat(data);
    return msg.save();
}

exports.list = async () => {
    return await Chat.find({})
}