const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: { type: String, required: true },
  answer: { type: String },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
