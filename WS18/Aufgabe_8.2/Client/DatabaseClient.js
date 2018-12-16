"use strict";
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://heroku-a7.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        document.getElementById("inputMatrikelSearch").addEventListener("input", handleChange);
        document.getElementById("findButton").addEventListener("click", findStudent);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "";
        sendRequest(query, handleFindResponse);
        console.log("Query: " + query);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            console.log("jmd da?");
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
        console.log(target.value);
    }
    function findStudent(_event) {
        console.log("test");
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map