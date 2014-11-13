'use strict';

var Hapi = require('hapi');

var routes = require('./routes');

var server = new Hapi.Server(3000);
routes(server);
server.start(function () {
  console.log('Hapi %s server started at: %s', Hapi.version, server.info.uri);
});
