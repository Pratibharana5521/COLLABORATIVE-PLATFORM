const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser =require('body-parser');
// req body - usko lene ke liye ek lib. ko middle m add karna jruri hai 
const cors  = require('cors');
app.use(express.urlencoded({extended:true}));
const AuthRouter = require('./Routes/AuthRouter');


// if we want to automatically update server then use nodemon and write the line on the package.json in scripts "start" :"nodemon index.js"
const db = require('./Models/db');


mongoose.connect('mongodb://127.0.0.1:27017/TBPPP')
// mongoose ek promise hai iisliye .then lagaye hai
// uper test databse ka name hai 
    .then(() => console.log('DB connected'))
    .catch(()=>{console.log('DB not connected !')})



app.get('/test' ,(req,res)=>{
    res.send("OK !");
})

app.use(bodyParser.json());
app.use(cors());
//  cors is for using another ports site in the backend like Reasct work on 3000 and backend work on 5050 so connect karne ke liye cors use kanra padta hai 
app.use('/auth',AuthRouter );


const PORT =  5050;
app.listen(PORT ,()=>{
    console.log(`Server is running on ${PORT}`)
})