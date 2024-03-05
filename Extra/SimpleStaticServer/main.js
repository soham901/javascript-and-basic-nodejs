const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();
const pathProvider = path.join(__dirname, "public");


function getFile(fn) {
    return path.join(pathProvider, fn === "/" ? 'index.html' : fn + ".html")
}


app.use((req, res) => {
    const filename = getFile(req.url)

    if (fs.existsSync(filename)) {
        res.sendFile(filename)
    }
    else {
        res.sendFile(getFile("/404"))
    }
})


app.listen(1600);