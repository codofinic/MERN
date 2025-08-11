// const express=require('express')
// const app=express()
// const cors =require('cors')
// const mongoose = require("mongoose");
// const PORT=5000

// // Middleware
// app.use(cors());
// app.use(express.json());

// // sample API
// app.get("/api/data",(req,res)=>{
//    res.json({message:["bhargav","Nagendra","santosh"]})
// });

// // Route to send book data
// app.get("/api/book", (req, res) => {
//   res.json({
//     book: {
//       name: "MERN",
//       Price: "200",
//       Author: "Sanoth",
//       Volume: "3"
//     }
//   });
// });

// // MongoDB connection
// mongoose.connect("mongodb://localhost:27017/contact", {
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Schema & Model
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// const Contact = mongoose.model("Contact", contactSchema);

// // data submiting router
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const newContact = new Contact({ name, email, password });
//     await newContact.save();
//     res.json({ message: "Data saved successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Error saving data" });
//   }
// });

// // server code
// app.listen(PORT,(req,res)=>{
//      console.log(`server is running on the port ${PORT}`)
// })

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/fileDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// File Schema
const File = mongoose.model("File", new mongoose.Schema({
  filename: String,
  path: String
}));

// Multer storage
const upload = multer({ dest: "uploads/" });

// Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = new File({
    filename: req.file.originalname,
    path: req.file.path
  });
  await file.save();
  res.send("File uploaded & saved to DB!");
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
