const express=require("express")
const app= express();
const PORT=3000;
let bodyParser = require("body-parser");
 let cors = require("cors");
 let usersRouter = require("./routes/users");


const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Medical',{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("this is my error"+err);
  });
 app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/users", usersRouter);




// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send({ title: 'Vikas ' });
// })
// app.get('/hello', (req, res,next)=>{
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>Hello GFG Learner!</h1>");
//     next();
// },
// (req, res)=>{
//     console.log('myself')
    
// })

app.listen(PORT, (res,error) =>{
    if(!error){
        console.log("Server is Successfully Running, and App is nodelistening on port "+ PORT)
    PORT}
    else {
        console.log("Error occurred, server can't start", error);}
    }
);