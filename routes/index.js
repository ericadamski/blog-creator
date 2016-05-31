'use strict';

let path = require('path');

var express = require('express');
var router = express.Router();

const index = path.join(__dirname, '..', 'index.html');

router.get('/*', (req, res, next) => {
  if (req.header.host !== '')
    if (process.env.NODE_ENV !== 'development')
      return res.status(404).end();
  next();
});

router.get('/', (req, res, next) => res.sendFile(index));

module.exports = router;
