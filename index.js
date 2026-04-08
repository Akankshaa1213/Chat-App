const express= require("express");
const app= express();

const mongoose = require('mongoose');
const path= require("path");
const chat = require("./models/chat.js")
const methodoverride= require("method-override");

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));

//permission from mongodb to perform operations
main().then(()=>
{
    console.log("connection succesful");
})
.catch(err => console.log(err));

//database connectivity
async function main() 
{
  
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//show all chats route:-
app.get("/chats",async (req,res)=>
{
    let chats= await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})


//new route:-
app.get("/chats/new",(req,res)=>
{
    res.render("new.ejs");
});


//create route:-
app.post("/chats",(req,res)=>
{
    let{from, to ,msg} = req.body;
    let newChat= new chat({
        from:from,
        to:to,
        messege:msg,
        created_at: new Date(),

    });
    newChat.save()
    .then(()=> 
        {
            console.log("Chat was saved");
        })
    .catch((err)=>
        {
            console.log(err);

        });
    res.redirect("/chats");
});


//Edit route
app.get("/chats/:id/edit", async (req,res)=>
{
    let {id}= req.params;
     let Chat = await chat.findById(id);
    res.render("edit.ejs", {Chat});
});


//UPDATE ROUTE:-
app.put("/chats/:id", async (req,res)=>
{
    let {id}= req.params;
    let {msg: newmsg} = req.body;
    let updatedchat= await chat.findByIdAndUpdate(
        id,
        {messege:newmsg},
    {runValidators: true, new:true});
    
    console.log(updatedchat);
    res.redirect("/chats")
});

//destroy route:-
app.delete("/chats/:id",async (req,res)=>
{
    let {id}= req.params;
    let deletedchat= await chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
});

//home route to check if server is working or not
app.get("/",(req,res)=>
{
    res.send("server is worling");

});

//app will listen on the port 8080
app.listen(8080,()=>
{
    console.log("app is listening on port 8080")
});
