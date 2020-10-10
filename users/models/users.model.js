const mongoose = require("../../common/services/mongoose.services").mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    avatar: String,
    bio: String,
    permissionLevel: Number,
});

const User = mongoose.model('Users', userSchema);

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
}

exports.findById = (id) => {
    return User.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.findByUsername = (username) => {
    return User.find({ username: username });
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec((err, users) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            });
    });
};