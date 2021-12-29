const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});

// app.use()

app.use('/', (req, res) => {
  return res.status(404).json('404 Not found');
})

app.listen(PORT, () => {
  console.log('Listening on port...', PORT);
});

module.exports = app;