const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});

// app.use()
app.get("/*", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../public/index.html"));
});
//status

app.use('/', (req, res) => {
  return res.status(404).json('404 Not found');
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
