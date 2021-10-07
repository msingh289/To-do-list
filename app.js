const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname+"/date.js")

const app =  express();
let items=["Buy Food","Cook Food","Eat Food"];
let workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req,res){
let day = date();
res.render("list", {listTitle: day, newListItems:items});
  });
  app.post("/", function(req,res){
  let item = req.body.newItem;
  if(req.body.list === "work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});

  app.get("/work", function(req,res){
    res.render("list", {listTitle: "work list", newListItems: workItems});
  });
  app.get("/about", function(req,res){
    res.render("about");
  });


app.listen(process.env.PORT || 3000, function(){
  console.log("server at port 3000");
});
/*  if(currentDay === 6 ||currentDay=== 0 ){
    res.write("<h1>yay funday</h1>");
  day = "Weekend";
  res.sendFile(__dirname + "/index.html");
  } else{
   res.write("<h1>it is a work day dude</h1>");
    res.write("<h1> so let's work </h1>")
    res.send();

    day= "Weekday";
    res.sendFile(__dirname + "/week.html");
}*/
/*var currentDay = today.getDay();
var day = "";
switch (currentDay) {
  case 0:
    day="sunday";
    break;
    case 1:
      day="Monday";
      break;  case 2:
          day="Tuesday";
          break;  case 3:
              day="Wednesday";
              break;  case 4:
                  day="Thrusdy";
                  break;  case 5:
                      day="Friday";
                      break;  case 6:
                          day="Saturday";
                          break;

  default:
  console.log("not possible it is an error");

}*/
