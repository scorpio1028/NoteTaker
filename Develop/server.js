const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const app = express ();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("./develop/public"));


app.get("/api/notes", function (req,res ){
    readFileAsync(".develop/db/db.json", "utf8").then(funciton(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes)
    })
});

app.post("/apt/nptes", function(req,res){
    const note = req.body;
    readFileAsync("./develop/db/db.json", "utf8").then(function(data){
        const notes = [].concat(JSON.parse(data));
        notes.push(note);
        return notes
    }).then(function(notes){
        writeFileAsync("./develop/db/db.json", JSON.stringify(notes))
        res.json(note);
    })
})

app.delete("/api/note/:id", function(req, res){
    const idToDelete = parseInt(req.params.id);
    readFileAsync(".devel")
})
