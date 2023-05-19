let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const createError = require('http-errors');

// Express Route
const studentRoute = require("./routes/routes")

// Connecting mongoDB Database
mongoose.connect("mongodb+srv://admin:admin@cluster0.cm8qge0.mongodb.net/rest?retryWrites=true&w=majority")
.then(()=>{
    console.log("databse connected")
}).catch((error)=>{
    console.log(error) 

})


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/', studentRoute)


// PORT

app.listen(8000, ()=>{
    console.log(" http://localhost:8000 running successfully")
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});







// app.get('/', async (req, res) => {
//     try{
//         const data = await User.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// app.post("/save",(req,res)=>{
//     let newPost = new User(req.body);

//     newPost.save((err) =>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:"Post saved successfully"
//         });

//     });

    
// });


