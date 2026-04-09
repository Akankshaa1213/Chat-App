const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        
    },
    to:{
        type:String,
        
        
    },
    message:{
        type:String,
        
    },
    created_at:{
        type:Date,
        

    }

});

const chat = mongoose.model("chat", chatSchema);

module.exports=chat;