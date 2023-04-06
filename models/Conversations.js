const mongoose = require('mongoose');


const conversationSchema = mongoose.Schema({
    members:{
        type: Array,
        requried: true,
    },
})

const Conversations = mongoose.model('Conversation', conversationSchema);

module.exports = Conversations;