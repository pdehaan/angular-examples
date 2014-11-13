'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('index.html');
    }
  },
  {
    method: 'GET',
    path: '/src/{filename*}',
    handler: {
      directory: {
        path: 'src'
      }
    }
  },
  {
    method: 'GET',
    path: '/bower_components/{filename*}',
    handler: {
      directory: {
        path: 'bower_components'
      }
    }
  }
];
