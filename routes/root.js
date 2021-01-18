'use strict';
var QRCode = require('qrcode');

module.exports = async function (fastify, opts) {
   async function handler(request, reply) {
      let valueToQR = null;

      switch (request.url) {
         case '/PNbx1G0T1yqRGYnhspC3POKCpPE1Hbcm':
            return reply.sendFile('serviceWorker.js');
         default:
            if (request.url !== '/') valueToQR = request.url.replace('/', '');
            else return reply.sendFile('index.html');
            break;
      }

      const qrBuffer = await QRCode.toBuffer(`${valueToQR}`, {
         errorCorrectionLevel: 'H',
         margin: 0.5,
         width: 500,
      });

      reply.type('image/png'); // if you don't set the content, the image would be downloaded by browser instead of viewed
      reply.send(qrBuffer);
   }

   fastify.get('/', handler);

   fastify.setNotFoundHandler(handler);
};
