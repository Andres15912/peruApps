let express = require('express')
let bodyParse = require('body-parser')
let mongoose = require('mongoose')
// import routes from './routes/routes'

let app = express()

let sport = require('./routes/sport')
let area = require('./routes/area')
let staff = require('./routes/staff')


app.use(bodyParse.urlencoded({
    extended:true
}))
app.use(bodyParse.json())
mongoose.connect('mongodb://localhost/prueba', { useNewUrlParser: true})

var db = mongoose.connection

if(!db){
    console.log("Error connecting db")
}else{
    console.log("Db connected successfully")
}

var port = process.env.PORT || 000

app.get('/', (req,res) => res.send('hello andres'))

app.use('/api', sport)
app.use('/api', area)
app.use('/api', staff)



// app.use(routes)

app.listen(port, function(){
    console.log("Running RestHub on port " + port );
})

