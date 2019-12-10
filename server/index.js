const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'hi there' });
});

app.listen(5000);
