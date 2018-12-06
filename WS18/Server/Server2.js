"use strict";
// * wird als Http von einem http importiert
const Http = require("http");
// der namespace wird defniniert
var A7;
(function (A7) {
    //Konsolenausgabe: Starting server
    console.log("Starting server");
    //Variable port wird deklariert. 
    let port = process.env.PORT;
    //Bedingung: Falls port nicht definiert ist, soll port 8100 angesteuert werden 
    if (port == undefined)
        port = 8200;
    // Variable server wird deklariert. Sie kreiert einen Http-Server
    let server = Http.createServer();
    //Server bekommt zwei Listener (request & listening) und soll bei Eintreffen des Events 
    // die Funktionen handleRequest & handleListen aufrufen
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //server soll auf den Port (8100) hören
    server.listen(port);
    //Definition der Fkt. handleListen
    function handleListen() {
        //bei Aufrauf Konsolenausgabe: Listening
        console.log("Listening");
    }
    //Definition der Fkt. handleRequest mit zwei Übergabeparametern
    function handleRequest(_request, _response) {
        //Konsolenausgabe
        console.log("I hear voices now!");
        // Im Header werden Informationen, wie content-type etc. eingetragen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Die Url der Anfrage wird notiert
        _response.write(_request.url);
        console.log(_request.url);
        // Konversation wird beendet
        _response.end();
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Server2.js.map