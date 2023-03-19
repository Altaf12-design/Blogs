const Blogs = require("../models/blogsModel");

exports.createBlogs = async (req, res, next) => {
  try {
    const Blog = new Blogs(req.body);
    await Blog.save();
    res.status(201).json({ success: true, data: Blog });
  } catch (err) {
    next(err);
  }
};

exports.getBlogss = async (req, res, next) => {
  try {
    const Blogss = await Blogs.find();
    res.status(200).json({ success: true, data: Blogss });
  } catch (err) {
    next(err);
  }
};

exports.getBlogs = async (req, res, next) => {
  try {
    const Blogs = await Blogs.findById(req.params.id);
    if (!Blogs) {
      return res
        .status(404)
        .json({ success: false, error: "My model not found" });
    }
    res.status(200).json({ success: true, data: Blogs });
  } catch (err) {
    next(err);
  }
};

exports.updateBlogs = async (req, res, next) => {
    console.log(req.body)
  try {

    var blog;
    blog = await Blogs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, error: "My model not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

exports.deleteBlogs = async (req, res, next) => {
  try {
    var Blog
    Blog = await Blogs.findByIdAndDelete(req.params.id);
    if (!Blog) {
      return res
        .status(404)
        .json({ success: false, error: "My model not found" });
    }
    res.status(204).json({ success: true,data:blog });
  } catch (err) {
    next(err);
  }
};
