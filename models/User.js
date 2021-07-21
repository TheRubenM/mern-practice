const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
});

// tells Mongo we want a new collection if it doesn't already exist.
mongoose.model('users', userSchema);