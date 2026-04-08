const mongoose = require('mongoose');
const chat = require("./models/chat.js")
main().then(()=>
{
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  
}

let chats=
[
  {
    from:"priyam",
    to:"praksh",
    messege:"send me the homework",
    created_at: new Date()
  },

  {
    from:"akanksha",
    to:"shruti",
    messege:"let's meet tommorow ",
    created_at: new Date()
  },

  {
    from:"shradhaa",
    to:"aman",
    messege:"send me the work updateds",
    created_at: new Date()
  },

  {
    from:"vedant",
    to:"anish",
    messege:"have you completed your home work",
    created_at: new Date()
  }


];

 chat.insertMany(chats);

