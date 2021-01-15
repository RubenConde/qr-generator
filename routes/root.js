'use strict';
var QRCode = require('qrcode');

module.exports = async function (fastify, opts) {
   fastify.setNotFoundHandler(function (req, reply) {
      let possibleUrl = req.url.replace('/', '');

      const urlRegex = RegExp(
         '(?:(?:https?|ftp|file)://|www.|ftp.)(?:([-A-Z0-9+&@#/%=~_|$?!:,.]*)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:([-A-Z0-9+&@#/%=~_|$?!:,.]*)|[A-Z0-9+&@#/%=~_|$])'
      );

      const isUrl = urlRegex.test(possibleUrl);

      if (isUrl) reply.redirect(`/?url=${possibleUrl}`);
      else reply.redirect(`/${possibleUrl}`);
   });

   fastify.get('/', handler);

   fastify.get('/:textToQR', handler);

   async function handler(request, reply) {
      let valueToQR = null;

      if (Object.keys(request.query).length > 0) valueToQR = request.query.url;
      else if (request.params.textToQR != null) valueToQR = request.params.textToQR;
      else if (valueToQR === null) {
         return reply.sendFile('index.html'); // serving path.join(__dirname, 'html', 'myHtml.html') directly
      }

      const qrBuffer = await QRCode.toBuffer(`${valueToQR}`, {
         errorCorrectionLevel: 'H',
         margin: 0.5,
         width: 500,
      });

      reply.type('image/png'); // if you don't set the content, the image would be downloaded by browser instead of viewed
      reply.send(qrBuffer);
      // return { root: true };
   }
};
