const express = require('express');
const cors = require('cors');

express()
  .set('etag', false)
  // .use('/', cors())
  .use('/', cors({ origin: /localhost/ }))
  .use('/', express.static(__dirname))
  .listen(3000, () => console.log('listening on http://localhost:3000'))
