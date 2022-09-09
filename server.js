const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config()



app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));



//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});