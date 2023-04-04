const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    city: String,
});

const taskSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    percentComplete: Number,
    status: String,
    users: [userSchema],
    date: { type: Date, default: Date.now }
});


const Task = mongoose.model("Task", taskSchema);

module.exports = Task;