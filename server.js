const express = require("express");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/storeItems");
const userRoute = require("./routes/users");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/store", itemRoutes);

const URL =
  //"mongodb+srv://lockDB:Node123@cluster0.zkdzu.mongodb.net/ezSpare?retryWrites=true&w=majority"
  "mongodb+srv://name:0000@cluster0.zkdzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGODB_URI||URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.log("error" + err));

app.use("/users", userRoute);

if (process.env.NODE_ENV==='production'){
  app.use(express.static("./ezy-front/build"));

  app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname,"ezy-front","build","index.html"));
  })
}

app.listen(port, () => {
  console.log("Server is Listening on port:" + port);
});
