
const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.get("/", postsController.getAll)

router.get("/:id", postsController.getByID)

router.post("/create", postsController.createPost)

router.put("/:id", postsController.updatePost)

router.delete("/:id", postsController.deletePost)

module.exports = router