const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs")


app.use(express.static("public"));

app.use(express.urlencoded());

app.set("view engine", "hbs");

app.set("views", path.join(__dirname,"/views"));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/public/static/index.html");
});

app.post("/", (req, res, next) => {
    Data = req.body;
    res.render(
        "index",Data
    )
    console.log(Data)
})

app.post("/data", (req, res, next) => {
    Data = req.body;
    res.render(
        "index1",Data
    )
    console.log(Data)
})

app.listen(3000, (err) => {
    if (err) {
        throw err
    }
    console.log(`Server running on localhost:3000`)
    console.log(Date())
});