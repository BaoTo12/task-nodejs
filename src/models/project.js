const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    city: String,
});

const projectSchema = new Schema({
    title: { type: String }, // String is shorthand for {type: String}
    status: String,
    description: String,
    users: [userSchema],
    startDate: {
        type: String,
        default: Date.now
    },
    endDate: String
});


const Project = mongoose.model("Project", projectSchema);

module.exports = Project;