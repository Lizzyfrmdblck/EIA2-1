"use strict";
const Http = require("http");
const Url = require("url");
var A7;
(function (A7) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8200;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    let products = {};
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices now!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = _request.url;
        let splitUrl = url.split("&");
        let urlQuery = Url.parse(_request.url, true).query;
        console.log(urlQuery);
        /* for (let i: number = 0; i < splitUrl.length; i++) {
             _response.write(splitUrl[i] + "<br>");
         }
         */
        for (let key in urlQuery) {
            console.log("URL: " + urlQuery[key]);
            console.log("Key: " + key);
            console.log("ProductsArray: " + products);
            console.log(splitUrl);
            if (key == "Nordmanntanne" || key == "Tanne" || key == "Fichte" || key == "UPS" || key == "Hermes" || key == "DHL") {
                _response.write(key + "<br>");
            }
            else {
                _response.write(key + " = " + urlQuery[key] + "<br>");
            }
        }
        _response.end();
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Server.js.map