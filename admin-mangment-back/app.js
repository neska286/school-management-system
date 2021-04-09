const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const port = 8080

const studentRouter = require ('./routes/user.route')

// connect to db
const db = "mongodb+srv://dbUser:dbUserPassword@school.gnybg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true }).then(()=>{
   console.log("DB is Connected")
 }).catch((err)=>{
   console.log("Error" + err)
 })

 app.use((req,res,next)=>{
  console.log(req.body)
   console.log(req.method)
   console.log(req.url)
   res.setHeader("Access-control-Allow-Origin","http://localhost:4200");
   res.setHeader("Access-Control-Allow-Headers",
  "Origin,Content-Type,Accept,autharization"
   );
  res.setHeader("Access-Control-Allow-Methoids",
   "GET,POST,PUT,DELETE");
 
   next();
})
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())


app.use('/users',studentRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})