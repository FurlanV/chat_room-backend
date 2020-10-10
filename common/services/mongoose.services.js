const mongoose = require('mongoose');

let count = 0;

const options = {
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0,
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true 
};

const connectWithRetry = () => {
    console.log('MongoDB retrying connection');
    mongoose.connect("mongodb://localhost:27017/chatroom", options).then(() => {
        console.log('MongoDB is connected');
    }).catch(err => {
        console.log("MongoDB connection unsuccessful", ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;