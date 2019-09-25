const app = require("express")();
const bodyParser = require("body-parser");
const debug = require("debug")("index");
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.json("working")
});


app.listen(3000, err => {
    if (err) debug("err");
    else debug("Testing");
});