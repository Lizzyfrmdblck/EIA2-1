var Aufgabe_2;
(function (Aufgabe_2) {
    window.addEventListener("load", init);
    var askPlayers = prompt("Wie viele Spieler?");
    var numPlayers = parseInt(askPlayers);
    if (numPlayers < 1 || numPlayers > 4) {
        {
            askPlayers;
        }
    }
    console.log(askPlayers);
    var askPairs = prompt("Wie viele Paare?");
    var numPairs = parseInt(askPairs);
    while (numPairs < 1 || numPairs > 20) {
        askPairs;
    }
    console.log(askPairs);
    var n;
    var cardContent = ["A", "B", "C", "D"];
    function init(_event) {
        var div = document.createElement("div");
        div.innerText = "Test";
        console.log(document);
        document.body.appendChild(div);
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }
    }
})(Aufgabe_2 || (Aufgabe_2 = {}));
//# sourceMappingURL=memory.js.map