const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// contact form route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const data = `Name: ${name} | Email: ${email} | Message: ${message}\n`;

  // save to file
  fs.appendFileSync("messages.txt", data);

  res.send(`
    <h2 style="font-family:sans-serif;text-align:center;margin-top:50px">
    ✅ Message Sent Successfully! <br><br>
    <a href="/">Go Back Home</a>
    </h2>
  `);
});

// start server
app.listen(3000,"0.0.0.0", () => {
  console.log("Server running → http://localhost:3000")
});
 