let posts = require("../data/posts");

const index = (req, res) => {
  res.json(posts);
};

// Show
const show = (req, res) => {
  const postId = req.params.id;
  const post = posts.find((p) => p.id == postId);
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  res.json(post);
};

// Destroy
const destroy = (req, res) => {
  const postId = req.params.id;
  const postIndex = posts.findIndex((p) => p.id == postId);
  if (postIndex === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  posts.splice(postIndex, 1);
  console.log(posts);
  res.status(204).send();
};

// Store
const store = (req, res) => {
  const { title, content, tag } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    tag,
  };
  posts.push(newPost);
  console.log("Nuovo post aggiunto:", newPost);
  res.status(201).json(newPost);
};

module.exports = { index, show, destroy };
