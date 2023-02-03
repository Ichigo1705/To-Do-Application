var express = require('express');

var app = express();
var todoController = require('./Controllers/todocontroller');

//Set Template Engine
app.set('view engine', 'ejs');

//Set Static Files
app.use(express.static('assets'));

//Fire Controllers
todoController(app);

//Listen to a port
app.listen(3000);
console.log('Listening to port 3000!!');