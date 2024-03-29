const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
app.get("*", (req, res) => {
    console.log(req, res);
    res.sendFile(path.resolve("static", "index.html"));
});
