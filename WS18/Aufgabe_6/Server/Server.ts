// * wird als Http von einem http importiert
import * as Http from "http";
// der namespace wird defniniert
namespace WBK_Heroku {
    //Konsolenausgabe: Starting server
    console.log("Starting server");
    //Variable port wird deklariert. 
    let port: number = process.env.PORT;
    //Bedingung: Falls port nicht definiert ist, soll port 8100 angesteuert werden 
    if (port == undefined)
        port = 8100;
    // Variable server wird deklariert. Sie kreiert einen Http-Server
    let server: Http.Server = Http.createServer();
    //Server bekommt zwei Listener (request & listening) und soll bei Eintreffen des Events 
    // die Funktionen handleRequest & handleListen aufrufen
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //server soll auf den Port (8100) hören
    server.listen(port);

    //Definition der Fkt. handleListen
    function handleListen(): void {
        //bei Aufrauf Konsolenausgabe: Listening
        console.log("Listening");
    }
    //Definition der Fkt. handleRequest mit zwei Übergabeparametern
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}
