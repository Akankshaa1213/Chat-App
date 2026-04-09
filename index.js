const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { validateChat, validateUpdateChat } = require("./validate/chatvalidation");
const path = require("path");
const chat = require("./models/chat.js");
const methodoverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

// DB connection
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// SHOW all chats
app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  res.status(200).render("index.ejs", { chats });
});

// NEW chat form
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// CREATE chat
app.post("/chats", (req, res) => {
  const { error } = validateChat(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let { from, to, msg } = req.body;

  let newChat = new chat({
    from,
    to,
    message: msg,
    created_at: new Date(),
  });

  newChat
    .save()
    .then(() => {
      res.status(201).redirect("/chats");
    })
    .catch(() => {
      res.status(500).send("Server Error");
    });
});

// EDIT route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let Chat = await chat.findById(id);

  if (!Chat) {
    return res.status(404).send("Chat not found");
  }

  res.render("edit.ejs", { Chat });
});

// UPDATE route
app.put("/chats/:id", async (req, res) => {
  const { error } = validateUpdateChat(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let { id } = req.params;
  let { msg: newmsg } = req.body;

  await chat.findByIdAndUpdate(id, { message: newmsg });

  res.status(200).redirect("/chats");
});

// DELETE route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;

  let deletedchat = await chat.findByIdAndDelete(id);

  if (!deletedchat) {
    return res.status(404).send("Chat not found");
  }

  res.status(200).redirect("/chats");
});

// HOME route
app.get("/", (req, res) => {
  res.send("server is working");
});

// SERVER
app.listen(8080, () => {
  console.log("app is listening on port 8080");
});