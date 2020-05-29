const {model, Schema} = require('mongoose');



const schema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    }
})

module.exports = model('task', schema );