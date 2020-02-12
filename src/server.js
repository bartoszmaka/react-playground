const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(compression({level: 9, threshold: 1}))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', '..', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Listening'));
