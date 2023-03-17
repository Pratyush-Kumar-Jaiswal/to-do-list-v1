const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

// console.log(date());

const ejs=require("ejs");
const e = require("express");
var items=["Cook","Sleep","Clean"];
var workitems=[];
const app=express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function (req,res) {
    
    let day=date.getDate();
    res.render("list",{listTitle:day,listitems:items});
});

app.get("/work",function(req,res){ 
    res.render("list",{listTitle:"Work List",listitems:workitems});
})
// app.post("/work",function(req,res){

//     let item=req.body.new_item;
    // workitems.push(item);
//     res.redirect("/work"); 
// })

app.post("/",function(req,res){

    var item=req.body.new_item;
    if(req.body.list==="Work List"){
        workitems.push(item);
        res.redirect("/work");  
    }else{
        items.push(item);
        res.redirect("/");
    }
    // console.log(req.body);
   
     
})


app.get("/about",function(req,res){
    res.render("about")
})
app.listen(3000,function(){
    console.log("Server is running on port 3000........");
});