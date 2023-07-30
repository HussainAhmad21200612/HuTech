const express = require("express");
const app = express();
const http = require("http");
const server=http.createServer(app);
const fs = require("fs");
const session = require("express-session");
// app.use(express.static("views"));
// app.use(express.static("public"));
var msg="a";
// const e = require("express");
// const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session({
//   secret: 'hutech',
//   resave: false,
//   saveUninitialized: true}));
// // req.session.isLoggedin=false;
// app.get("/todo-data",(req,res)=>{
//   if(!req.session.isLoggedin){
//     res.redirect("/login");
//     return;
//   }
//     readAllTodos("./files.txt",function (err, data) {
//         if (err) {
//           res.status(500).send("error");
//           return;
//         }
//         // res.status(200).send(JSON.stringify(data));
//         res.status(200).json(data);
//       });
//     });
// app.get("/",(req,res)=>{
//     if(!req.session.isLoggedin){
//       res.redirect("/login");
//       return;
//     }
//     res.sendFile(__dirname+"/public/index.html");
//   });



//   app.get("/todo",(req,res)=>{
//     if(!req.session.isLoggedin){
//       res.redirect("/login");
//       return;
//     }
//     res.sendFile(__dirname+"/views/todo.html");
//   });
//   app.get("/sc.js",(req,res)=>{
//     if(!req.session.isLoggedin){
//       res.redirect("/login");
//       return;
//     }
//     res.sendFile(__dirname+"/views/sc.js");
//   });
//  app.get("/style.css",(req,res)=>{
//   if(!req.session.isLoggedin){
//     res.redirect("/login");
//     return;
//   }
//   res.sendFile(__dirname+"/views/style.css");
// });
// app.get("/su.js",(req,res)=>{
//   if(!req.session.isLoggedin){
//     res.redirect("/login");
//     return;
//   }
//   res.sendFile(__dirname+"/views/su.js");
// });
// app.get("/login",(req,res)=>{
//   res.sendFile(__dirname+"/views/login.html");
// });
// app.get("/signup",(req,res)=>{
//   res.render("signup.ejs",{message:req.session.exist})});

// app.get("/welcome",(req,res)=>{
//   if(!req.session.isLoggedin){
//     res.redirect("/login");
//     return;
//   }
//   res.render("welcome.ejs",{username:req.session.user});
// });
// app.get("/about",(req,res)=>{
//   if(!req.session.isLoggedin){
//     res.redirect("/login");
//     return;
//   }
//   res.sendFile(__dirname+"/views/about.html");
// });
// app.get("/contact",(req,res)=>{
//   if(!req.session.isLoggedin){
//     res.redirect("/login");
//     return;
//   }
//   res.sendFile(__dirname+"/views/contact.html");
// });
// app.get("/error",(req,res)=>{
//   res.render("error.ejs",{message:req.session.error});
// }
// );  
// app.post("/login",(req,res)=>{
//   const {username,password}=req.body;
//   fs.readFile("./users.txt", 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     try {
//       const parsedData = JSON.parse(data);
//       var f=0;
//       parsedData.forEach(function(item){
//         if(item.username===username && item.password===password){
//           req.session.user=item.username;
//           req.session.password=item.password;
//           req.session.isLoggedin=true;
//           res.redirect("/welcome");
//           f=1;
//           return;
//         }
        
//         });
//         if (f==0){
//           req.session.error="Invalid username or password";
//           res.redirect("/error");
//         }
        
        
//       }catch (err) { 
//       console.error(err);
//     }
//   }); 
// });
// app.post("/signup",(req,res)=>{
//   const users=req.body;
//   console.log(users);
//   var f=0;  
//   fs.readFile("./users.txt", 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     try{
//       const parsedData = JSON.parse(data);
//       parsedData.forEach((item)=>{
//         if(item.email===users.email){
//           req.session.exist="User already exists";
//           res.redirect("/signup");
//           f=1;
//           return;
//         }
//         });
//         saveData("./users.txt",users,function(err){
//           if(err){
//               res.status(500).send("error");
//               return;
//           }
//           req.session.user=users.username;
//           req.session.password=users.password;
//           req.session.isLoggedin=true;
//           res.redirect("/welcome");
//         });
//       }catch (err) {
//         console.error(err);
//       };
//       });
  
 
// });

// app.post("/error",(req,res)=>{
//   const {username,password}=req.body;
//   var f=0;
//   fs.readFile("./users.txt", 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     try {
//       const parsedData = JSON.parse(data);
//       parsedData.forEach((item)=>{
//         if(item.username===username && item.password===password){
//           req.session.user=item.username;
//           req.session.password=item.password;
//           req.session.isLoggedin=true;
//           res.redirect("/welcome");
//           return;
//         }

//         })
//         req.session.error="Invalid username or password";
//           res.redirect("/error");
        
//       }catch (err) { 
//       console.error(err);
//     }
//   }); 
// });
// app.post("/todo",(req,res)=>{

//     const todo=req.body;
//     console.log(todo);
//     saveData("./files.txt",todo,function(err){
//         if(err){
//             res.status(500).send("error");
//             return;
//         }
//         res.status(200).send("ok");
//     });
// });
// app.post("/delete",(req,res)=>{
//     removeTask(req.body, function (err) {
//         if (err) {
//             res.status(500).send("error");
//             return;
//             }
            
//     res.status(200).send("ok");
// });}
// );
// app.post("/update",(req,res)=>{ 
//     updateCheckedTodo(req.body,function(err){
//         if(err){
//         res.status(500).send("error");
//         return;
//         }
//         res.status(200).send("ok");
//     });
//     });
// function saveData(file,todo,callback){
//     readAllTodos(file,function (err, data) {
//         if (err) {
//           callback(err);
//           return;
//         }
    
//         data.push(todo);
    
//         fs.writeFile(file, JSON.stringify(data,null,2), function (err) {
//           if (err) {
//             callback(err);
//             return;
//         }
//         callback(null);
//       });
//     });
// }

// function readAllTodos(file,callback){
//   fs.readFile(file,function(err,data){
//       if (err) {
//           callback(err);
//           return;
//         }
    
//         if (data.length === 0) {
//           data = "[]";
//         }
    
//         try {
//           data = JSON.parse(data);
//           callback(null, data);
//         } catch (err) {
//           callback(err);
//         }
//       });
//     }
// server.listen("5000",()=>{
// console.log("Server started at 5000");
// });


// function removeTask(body){
//     const {property,value}=body;
//     fs.readFile("./files.txt", 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
  
//       try {
//         const parsedData = JSON.parse(data);
//         const neededData = parsedData.filter(item => item[property] !== value);
//         const updatedData = JSON.stringify(neededData, null, 2);
  
//         fs.writeFile("./files.txt", updatedData, 'utf8', (err) => {
//           if (err) {
//             console.error('Error writing to the file:', err);
//           } else {
//             console.log(`Task : '${value}' removed.`);
//           }
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     });
// }
// function updateCheckedTodo(body){

//     //read from file and if content matches then change its ckecked status
//     const {property,value} = body;
//     fs.readFile("./files.txt", 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
  
//       try {
//         const parsedData = JSON.parse(data);
//         const neededData = parsedData.filter(item => item[property] === value);
//   console.log(parsedData)
//         parsedData.forEach((item)=>{  
//           if(item[property]===value){
//             item.completed=!item.completed;
//           }
//         });
//         console.log(parsedData);
//         const updatedData = JSON.stringify(parsedData, null, 2);
  
//         fs.writeFile("./files.txt", updatedData, 'utf8', (err) => {
//           if (err) {
//             console.error('Error writing to the file:', err);
//           } else {
//             console.log(`Task : '${value}' status updated!`);
//           }
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     }
  
//   )};
server.listen("5500",()=>{
  console.log("Server started at 5000");
  });