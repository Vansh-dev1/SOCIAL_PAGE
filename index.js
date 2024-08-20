const express = require("express");
const app = express();
const FgBlue = "\x1b[34m"
const Reset = "\x1b[0m"

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello, World!!")
})

app.listen(3000, () => {
  console.log("Web Server is up in running on port 3000")
  console.log("URL: " +FgBlue + "http://localhost:3000/" + Reset)
  console.log()
  console.log("==== SERVER LOGS ====")
});
