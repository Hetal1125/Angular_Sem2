const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        type: String,
        reuired: [true,'title is required']
    },
    content:{
        type: String,
        reuired: [true,'content is required']
    }
},{
    timestamp: true
})

module.exports = mongoose.model('posts',postSchema);