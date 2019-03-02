const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

const db = require("./config/keys").mongoURI;

//connect mongo DB

mongoose
  .connect(db)
  .then(() => {
    console.log("MONGODB connected");
  })
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));
app.use(bodyParser.json());

// Use Routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
