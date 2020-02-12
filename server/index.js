const express = require('express');
const path = require('path');
const compression = require('compression');
const serveStatic = require('serve-static')

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(compression())
app.use(serveStatic(
  path.resolve(__dirname, '../react-ui/build'),
  {
    maxAge: '1y'
  }
))

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});
