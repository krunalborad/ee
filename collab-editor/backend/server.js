const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Document Schema
const Document = mongoose.model("Document", new mongoose.Schema({
  title: String,
  content: String
}, { timestamps: true }));

// API Routes
app.post("/documents", async (req, res) => {
  const doc = await Document.create({ title: "Untitled", content: "" });
  res.json(doc);
});

app.get("/documents/:id", async (req, res) => {
  const doc = await Document.findById(req.params.id);
  res.json(doc);
});

// Socket.io Real-time
io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("join-document", async (docId) => {
    socket.join(docId);
  });

  socket.on("send-changes", (data) => {
    socket.to(data.docId).emit("receive-changes", data.content);
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));