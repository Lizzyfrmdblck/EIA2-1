import * as Http from "http";
import * as Url from "url";

namespace A7_2 {
    console.log("Starting server");

    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8200;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    interface ProductKey {
        [key: string]: string;
    }

    let products: ProductKey = {};


    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices now!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let url: string = _request.url;
        let splitUrl: string[] = url.split("&");
        let urlQuery: ProductKey = Url.parse(_request.url, true).query;

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
            } else {
                _response.write(key + " = " + urlQuery[key] + "<br>");
            }

        }

        _response.end();
    }
}