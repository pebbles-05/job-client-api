const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/testing")
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
