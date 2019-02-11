var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("It's alive! \n");
});

app.listen(process.env.PORT || 3000);
