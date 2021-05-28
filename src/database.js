const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://Server:Escorpion15@databasecluster.1ry5d.mongodb.net/PexShop?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
  .then((db) => console.log("Db Connected"))
  .catch((error) => console.log(error));

