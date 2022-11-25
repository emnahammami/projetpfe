const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  price: Number,
  image :String,
  role: {
    type: String,
    enum: ["article", "accouplement"],
    default: "article",
  },

});
module.exports = mongoose.model("article", articleSchema);