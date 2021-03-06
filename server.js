var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'public/views/index.html'));
});

app.listen(process.env.PORT || 3000);
console.log("listening on port 3000");
