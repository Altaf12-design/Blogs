const express = require('express');
const router = express.Router();

const myModelController = require('../controller/blogsController')

router.post('/postBlog', myModelController.createBlogs);
router.get('/getBlog', myModelController.getBlogss);
router.get('/getSingleBlog/:id', myModelController.getBlogs);
router.put('/updateBlog/:id', myModelController.updateBlogs);
router.delete('/deleteBlog/:id', myModelController.deleteBlogs);

module.exports = router;
