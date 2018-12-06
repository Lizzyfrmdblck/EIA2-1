"use strict";
const Http = require("http");
const Url = require("url");
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
        console.log("I hear voices!");
        let url_object = Url.parse(_request.url, true);
        let query = url_object.query;
        if (url_object.pathname != "/favicon.ico") {
            console.log(query);
            order = query;
            console.log(order);
        }
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _request.url;
        for (let i in order) {
            _response.write(i + ": " + order[i] + "<br>");
            _response.end();
        }
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Server2.js.map