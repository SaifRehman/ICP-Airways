const express = require('express');
const epimetheus = require('epimetheus');

const app = express();
epimetheus.instrument(app);

app.get('/', (req, res) => {
  res.send();
});

app.listen(3000, () => {
  console.log('express server listening on port 3000');
});
