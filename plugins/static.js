'use strict';

const fp = require('fastify-plugin');
const fastifyStatic = require('fastify-static');
const path = require('path');

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
   fastify.register(fastifyStatic, {
      root: path.join(__dirname, '..', 'html'),
   });
});
