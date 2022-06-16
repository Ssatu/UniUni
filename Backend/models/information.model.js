const mongoose = require("mongoose");
const Section = require("./section.model.js");

const Information = new mongoose.Schema(
  {
    author: { type: String, required: true, default: "Anonymous" },
    type: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    tags: { type: String },
    body: [Section.schema],
  },
  { collection: "information" }
);

const model = mongoose.model("information", Information);
module.exports = model;
