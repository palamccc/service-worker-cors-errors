const express = require('express');
const cors = require('cors');

express()
  // .use('/', cors({ origin: 'http://localhost:3000' }))
  .use('/', express.static(__dirname))
  .listen(3000, () => console.log('listening on http://localhost:3000'))
