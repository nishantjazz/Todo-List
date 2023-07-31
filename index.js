import express from "express";
import bodyParser from "body-parser";

const app = express();
const portNumber = 3000;

var newDiv = [];
var newDivWork = []
var date = new Date();
var actualDate = "Today - " + date.toLocaleDateString();
var actualDateWork = "Work - " + date.toLocaleDateString();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
res.render("index.ejs", {
    actualDate: actualDate,
    newToDo: newDiv,
});
});

app.get("/work", (req, res) =>{
    res.render("work.ejs", {
        actualDate: actualDateWork,
        newToDo: newDivWork,
    });
    });
    

app.post("/submit", (req, res) =>{
    newDiv.push(`<div class="all-div item"> <input type="checkbox" class="strike-through"  name="added-list" /> 
    <label for="added-list" class="strike-this">${req.body["newToDoList"]}</label> </div>`);

    res.redirect("/");
})

app.post("/workSubmit", (req, res) =>{
    newDivWork.push(`<div class="all-div item"> <input type="checkbox" class="strike-through"  name="added-list" /> 
    <label for="added-list" class="strike-this">${req.body["newToDoWorkList"]}</label> </div>`);
    res.redirect("/work");
})

app.listen(portNumber, () =>{
    console.log(`${portNumber} port is running now.`);
});