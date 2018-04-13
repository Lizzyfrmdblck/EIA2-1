var Aufgabe_2;
(function (Aufgabe_2) {
    window.addEventListener("load", init);
    var n;
    var cardContent = ["A", "B", "C", "D"];
    var askPairs;
    var numPairs = parseInt(askPairs);
    var askPlayers;
    var numPlayers = parseInt(askPlayers);
    /*Asking how many Pairs + Check if it's in range + if it's a number*/
    do {
        askPairs = prompt("Wie viele Paare?");
        numPairs = parseInt(askPairs);
    } while (numPairs < 1 || numPairs > 20);
    do {
        askPairs = prompt("Wie viele Paare?");
        numPairs = parseInt(askPairs);
    } while (isNaN(numPairs) || isNaN(numPairs));
    /* Gebe ich zuerst eine falsche Nummer oder einen String ein funktionieren beide Abfragen.
       Nach der String-Test kann ich aber auch Zahlen au�erhalb der Range eingeben und er springt weiter.
       Ich bin mir ziemlich sicher, dass es daran liegt, dass die Abfragen in 2 versch. Schleifen stattfinden.
       Wenn ich beide Abfragen in eine Schleife gepackt habe, habe ich es aber nicht zum Laufen gebracht.*/
    /*Asking how many Players + Check if it's in range + if it's a number*/
    do {
        askPlayers = prompt("Wie viele Spieler?");
        numPlayers = parseInt(askPlayers);
    } while (numPlayers < 1 || numPlayers > 20);
    do {
        askPlayers = prompt("Wie viele Spieler?");
        numPlayers = parseInt(askPlayers);
    } while (isNaN(numPlayers) || isNaN(numPlayers));
    console.log(askPlayers);
    console.log(askPairs);
    function init(_event) {
        var h = document.createElement("h1");
        h.innerText = "Dies ist eine generierte Überschrift";
        console.log(document);
        document.body.appendChild(h);
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }
    }
})(Aufgabe_2 || (Aufgabe_2 = {}));
//# sourceMappingURL=memory.js.map