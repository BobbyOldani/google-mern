const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true},
    authors: { type: String, require: true},
    description: { type: String, require: true},
    image: String,
    link: { type: String, require: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;