# 💬 Chat Application (Node.js + MongoDB)

A simple CRUD-based Chat Application built using **Node.js, Express, MongoDB, and EJS**.
This app allows users to create, read, update, and delete chat messages between a sender and receiver.

---

## 🚀 Features



---

## 🛠️ Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Frontend: EJS (Embedded JavaScript Templates)
* Styling: CSS
* Other: Method-Override

---

## 📂 Project Structure

project/
│
├── mongo/
│   ├── models/
│   │   └── chat.js
│   ├── index.js
│   └── init.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── package.json
├── package-lock.json
└── node_modules/

---

## ⚙️ Installation & Setup

1. Clone the repository
   git clone https://github.com/Akankshaa1213/Chat-App.git
   cd Chat-App

2. Install dependencies
   npm install

3. Install required packages (if needed)
   npm install express mongoose ejs method-override

---

## 🗄️ Database Setup

Make sure MongoDB is running locally:

mongosh

Database used:
mongodb://127.0.0.1:27017/whatsapp

---

## 🌱 Initialize Sample Data (Optional)

Run the following command to insert sample chats:

node init.js

---

## ▶️ Run the Application

node index.js

Server will run on:
http://localhost:8080

---

## 🔄 Application Flow

1. Create Chat

* User fills form in new.ejs
* Data sent to /chats (POST)
* Stored in MongoDB

2. View Chats

* /chats route fetches all chats
* Displayed using index.ejs

3. Edit Chat

* User clicks Edit
* Opens edit.ejs
* Sends PUT request to update message

4. Delete Chat

* User clicks Delete
* Sends DELETE request
* Chat is removed from database

---

## 🔌 API Routes

GET     /chats           → Show all chats
GET     /chats/new       → New chat form
POST    /chats           → Create chat
GET     /chats/:id/edit  → Edit form
PUT     /chats/:id       → Update chat
DELETE  /chats/:id       → Delete chat

---

## 🎨 UI Overview

* Chat boxes for each message
* Highlighted message section
* Edit and Delete buttons
* Timestamp display

---


## 🔮 Future Enhancements

* Add user authentication (login/signup)
* Real-time chat using Socket.io
* Improve UI design
* Add online/offline status
* Enable media sharing

---

## 👩‍💻 Author

Akanksha
Third Year Computer Science Student

---

## ⭐ Conclusion

This project demonstrates:

* CRUD operations using Express and MongoDB
* RESTful routing
* Dynamic UI rendering using EJS
* Basic full-stack application structure

---
