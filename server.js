// https://expressjs.com/
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  const { body } = req;
  const { text } = body;

  res.json({ text });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
