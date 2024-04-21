const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: String
})


module.exports = mongoose.model('Todo', todoSchema);
