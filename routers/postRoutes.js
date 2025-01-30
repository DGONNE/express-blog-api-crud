const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Rotte
router.get("/posts", postController.index);
router.get("/posts/:id", postController.show);
router.delete("/posts/:id", postController.destroy);
router.post("/posts", postController.store);
router.put("/posts/:id", postController.update);

module.exports = router;
