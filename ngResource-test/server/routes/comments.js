'use strict';

var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/comments',
    handler: function (request, reply) {
      var response = [
        {
          'id': 4,
          'name': 'Finn the Human',
          'comment': 'Slamacow! That was tops! Who\'s not good at math? I was all, "Four!"',
          'created_at': new Date()
        },
        {
          'id': 11,
          'name': 'Earl of Lemongrab',
          'comment': 'This castle is in unacceptable condition! Unacceptable!.',
          'created_at': new Date()
        }
      ];

      console.log('-----\nGET /api/comments');
      console.log('response: %s\n', prettyJSON(response));
      reply(response);
    }
  },
  {
    method: 'GET',
    path: '/api/comments/{id}',
    handler: function (request, reply) {
      var commentId = request.params.id;
      var response = {
        'id': commentId,
        'author': 'Peppermint Butler',
        'comment': 'Hey, man! Calm down! It\'s just a prank, man, for laughs!',
        'timestamp': new Date()
      };

      console.log('-----\nGET /api/comments/{id}');
      console.log('id: %d', commentId);
      console.log('response: %s\n', prettyJSON(response));
      reply(response);
    },
    config: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/comments',
    handler: function (request, reply) {
      console.log('-----\nPOST /api/comments');
      console.log('payload: %s\n', prettyJSON(request.payload));
      reply({'status': 'ok'});
    }
  },
  {
    method: 'POST',
    path: '/api/comments/{id}',
    handler: function (request, reply) {
      var commentId = request.params.id;

      console.log('-----\nPOST /api/comments/{id}');
      console.log('id: %d', commentId);
      console.log('payload: %s\n', prettyJSON(request.payload));
      reply({'status': 'ok'});
    },
    config: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/comments',
    handler: function (request, reply) {
      console.log('-----\nDELETE /api/comments');
      console.log('payload: %s\n', prettyJSON(request.payload));
      reply({'deleted': 'ok'});
    }
  },
  {
    method: 'DELETE',
    path: '/api/comments/{id}',
    handler: function (request, reply) {
      var commentId = request.params.id;
      console.log('-----\nDELETE /api/comments/{id}');
      console.log('id: %d', commentId);
      console.log('payload: %s\n', prettyJSON(request.payload));
      reply({'deleted': 'ok'});
    },
    config: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  }
];

function prettyJSON(data) {
  return JSON.stringify(data, null, 2);
}
