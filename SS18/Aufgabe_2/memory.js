var Aufgabe_2;
(function (Aufgabe_2) {
    window.addEventListener("load", init);
    var askPairs;
    var numPairs = parseInt(askPairs);
    do {
        askPairs = prompt("Wie viele Paare?");
        numPairs = parseInt(askPairs);
    } while (numPairs < 1 || numPairs > 20);
    var askPlayers;
    var numPlayers = parseInt(askPlayers);
    do {
        askPlayers = prompt("Wie viele Spieler?");
        numPlayers = parseInt(askPlayers);
    } while (numPlayers < 1 || numPlayers > 4);
    console.log(askPlayers);
    console.log(askPairs);
    var n;
    var cardContent = ["A", "B", "C", "D"];
    function init(_event) {
        var div = document.createElement("div");
        for (var i = 0; i < numPairs * 2; i++) {
            document.body.appendChild(div);
            div.innerText = "CardArray";
        }
        /* let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
         for (let i: number = 0; i < fieldsets.length; i++) {
             console.log(fieldsets[i]);
             console.log(fieldsets[i].textContent);
         }*/
    }
})(Aufgabe_2 || (Aufgabe_2 = {}));
//# sourceMappingURL=memory.js.map