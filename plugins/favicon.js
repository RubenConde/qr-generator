'use strict';

const fp = require('fastify-plugin');
const fastifyFavicon = require('fastify-favicon');
const path = require('path');

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
   fastify.register(fastifyFavicon, {
      path: path.join(__dirname, '..', 'static', 'pwa'),
   });
});
