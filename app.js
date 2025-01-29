const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const port = 3002;

app.use(express.json());

app.use(postRoutes);

app.use(bodyParser.json());
app.use(postRoutes);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
