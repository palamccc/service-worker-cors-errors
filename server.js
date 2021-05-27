const express = require('express');

express()
  .set('etag', false)
  .use('/', express.static(__dirname))
  .listen(3000, () => console.log('listening on http://localhost:3000'))
