const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const port = 3002;

app.use(express.json());

app.use(bodyParser.json());
app.use(postRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route non trovata" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Si è verificato un errore interno" });
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
