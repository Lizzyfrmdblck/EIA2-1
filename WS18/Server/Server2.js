"use strict";
const Http = require("http");
var A7;
(function (A7) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8200;
    let order = {};
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices now!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.write(order + "<br>");
        _response.end();
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Server2.js.map