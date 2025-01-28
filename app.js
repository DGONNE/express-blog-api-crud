const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const port = 3002;

app.use(express.json());
app.use("/api", postRoutes);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
