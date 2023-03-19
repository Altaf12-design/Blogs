const mongoose = require('mongoose');

const BlogsModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    description: {
      type: String,
      required: [true],
    },
    imageUrl: {
      type: String,
     
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model('Blogs', BlogsModel);

module.exports = Blogs;
