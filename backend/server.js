const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("");
app.get("/users", async (req, res) => {  const users = await User.find();
     res.json(users);
    });
app.listen(5000, () => console.log("Server running"));
