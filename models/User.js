const mongoose = require('mongoose');
const { Schema } = mongoose; // mongoose expects you to tell it your schema ahead of time

const userSchema = new Schema({
    googleId: String,
});

// tells Mongo we want a new collection 'users' if it doesn't already exist. Will only create it if it doesn't already exist!
mongoose.model('users', userSchema); 