const express = require("express");
const app = express();

const PORT = 3000;

const FgBlue = "\x1b[34m";
const Reset = "\x1b[0m";

app.use(express.static('public'));

app.get("/health", (req, res) => {
  res.status(200).json({
    "msg": "Server Up In Running!!!"
  });
});

app.listen(PORT, () => {
  console.log(`Web Server is up in running on ${PORT}`);
  console.log(`URL: ${FgBlue} "http://localhost:${PORT}/" ${Reset}`);
  console.log();
});
