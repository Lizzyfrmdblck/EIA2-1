var Aufgabe_2;
(function (Aufgabe_2) {
    window.onload = function () {
        var n;
        var cardContent = ["A", "B", "C", "D"];
        var cardArray;
        var askPairs;
        var numPairs = parseInt(askPairs);
        var askPlayers;
        var numPlayers = parseInt(askPlayers);
        var card = document.createElement("div");
        var cssClass = ["hidden"];
        /*Asking how many Pairs + Check if it's in range + if it's a number*/
        do {
            askPairs = prompt("Wie viele Paare?");
            numPairs = parseInt(askPairs);
        } while (numPairs < 1 || numPairs > 20);
        /*    do  {
            askPairs = prompt ("Wie viele Paare?");
            numPairs = parseInt(askPairs);
            
            } while (isNaN(numPairs) || isNaN(numPairs));
           Gebe ich zuerst eine falsche Nummer oder einen String ein funktionieren beide Abfragen.
           Nach der String-Test kann ich aber auch Zahlen au�erhalb der Range eingeben und er springt weiter.
           Ich bin mir ziemlich sicher, dass es daran liegt, dass die Abfragen in 2 versch. Schleifen stattfinden.
           Wenn ich beide Abfragen in eine Schleife gepackt habe, habe ich es aber nicht zum Laufen gebracht.*/
        /*Asking how many Players + Check if it's in range + if it's a number*/
        do {
            askPlayers = prompt("Wie viele Spieler?");
            numPlayers = parseInt(askPlayers);
        } while (numPlayers < 1 || numPlayers > 4);
        /*    do  {
            askPlayers = prompt ("Wie viele Spieler?");
            numPlayers = parseInt(askPlayers);
            
            } while (isNaN(numPlayers) || isNaN(numPlayers));
        */
        console.log(askPlayers);
        console.log(askPairs);
        createCard(cardContent, cssClass);
        createPlayer(cardContent);
        createCards(numPairs);
        console.log(cardArray);
        console.log(cardContent);
        function createCards(_numPairs) {
            for (var i = 0; i < numPairs; i++) {
                cardArray.push(cardContent[i]);
            }
            for (var i = 0; i < cardArray.length; i++) {
                randomNumber;
            }
        }
        function randomNumber(_min, _max) {
            _min = 0;
            _max = cardArray.length;
            Math.floor(Math.random() * (_max - _min + 1) + _min);
        }
        function createCard(_content, _status) {
            for (var i = 0; i < numPairs * 2; i++) {
                var card_1 = document.createElement("div");
                /*card.innerText = "Test";*/
                document.getElementById("playground").appendChild(card_1);
            }
        }
        function createPlayer(_player) {
            for (var i = 0; i < numPlayers; i++) {
                var player = document.createElement("div");
                var playerCounter = [1, 2, 3, 4];
                player.innerText = "Player" + playerCounter[i];
                document.getElementById("player").appendChild(player);
            }
        }
        /*  let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
          for (let i: number = 0; i < fieldsets.length; i++) {
                  console.log(fieldsets[i]);
                  console.log(fieldsets[i].textContent);
              }*/
    };
})(Aufgabe_2 || (Aufgabe_2 = {}));
//# sourceMappingURL=memory.js.map