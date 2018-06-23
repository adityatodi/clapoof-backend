var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/routes');

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', route);

app.get('/',function(req,res){
	res.send('App working properly');
})

const port = 3000;

app.listen(port,()=>{
	console.log('Server started at port ' + port);
});