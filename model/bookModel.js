const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    unique: true,
    required: [true, "Book name is srequired!"],
  },
  bookPrice: {
    type: String,
    required: [true, "Book price is srequired!"],
  },
  isbnNumber: {
    type: Number,
    required: [true, "Isbn number is required"],
  },
  authorName: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  publication: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
