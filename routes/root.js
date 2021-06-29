"use strict";
var QRCode = require("qrcode");

module.exports = async function (fastify, opts) {
  async function handler(request, reply) {
    let valueToQR = null;

    if (request.url !== "/") valueToQR = request.url.replace("/", "");
    else return reply.redirect(302, "https://qr.rubenconde.com");

    const qrBuffer = await QRCode.toBuffer(`${valueToQR}`, {
      errorCorrectionLevel: "H",
      margin: 1,
      width: 500,
    });

    reply.type("image/png"); // if you don't set the content, the image would be downloaded by browser instead of viewed
    reply.send(qrBuffer);
  }

  fastify.get("/", handler);

  fastify.setNotFoundHandler(handler);
};
