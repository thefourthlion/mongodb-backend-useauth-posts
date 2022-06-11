const express = require("express");

const router = express.Router();

const { createPost, readPosts, deletePost } = require("../controllers/posts");

router.route("/post").post(createPost);
router.route("/read").get(readPosts);
router.route("/delete/:id").delete(deletePost);

module.exports = router;
