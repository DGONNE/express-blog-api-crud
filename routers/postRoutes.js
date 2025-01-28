const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Rotte
router.get("/posts", postController.index); // Ottieni tutti i post
router.get("/posts/:id", postController.show); // Ottieni un singolo post
router.delete("/posts/:id", postController.destroy); // Elimina un post

module.exports = router;
