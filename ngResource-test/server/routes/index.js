'use strict';

module.exports = function (server) {
  server.route(require('./static'));
  server.route(require('./comments'));
};
