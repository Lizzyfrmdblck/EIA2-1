var Aufgabe_2;
(function (Aufgabe_2) {
    var n;
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    var cardArray = [];
    var askPairs;
    var numPairs = parseInt(askPairs);
    var askPlayers;
    var numPlayers = parseInt(askPlayers);
    var card = document.createElement("div");
    var cssClassHidden = ["hidden"];
    var cssClassOpen = ["open"];
    var cssClassOpenString = "open";
    var openCards = [];
    window.onload = function () {
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
        //createCard(cardContent, "#ff0000");
        createPlayer(cardContent);
        createCards(numPairs, cardArray);
        console.log(cardContent);
        function createPlayer(_player) {
            for (var i = 0; i < numPlayers; i++) {
                var player = document.createElement("div");
                var playerCounter = [1, 2, 3, 4];
                player.innerText = "Player" + playerCounter[i];
                document.getElementById("player").appendChild(player);
            }
        }
        function createCards(_numPairs, _cardArray) {
            for (var i = 0; i < _numPairs; i++) {
                cardArray.push(cardContent[i]);
            }
            for (var i = 0; i < cardArray.length; i++) {
                var randomContent = Math.floor(Math.random() * (cardArray.length - 0) + 0);
                //       let randomStatus: number = Math.floor(Math.random() * (cssClassHidden.length - 0) + 0);
                var status_1 = cssClassHidden[0];
                createCard(cardArray, randomContent, status_1);
                cardArray.splice(randomContent, 1);
            }
        }
        /*        function randomContent(_min: number, _max: number): void {
                _min = 0;
                _max = cardArray.length;
                Math.floor(Math.random() * (_max - _min + 1) + _min);
            }
            
                function randomStatus(_min: number, _max: number): void {
                _min = 0;
                _max = cssClasses.length;
                Math.floor(Math.random() * (_max - _min + 1) + _min);
            }
        */
        function createCard(_content, _randomContent, _status) {
            var _loop_1 = function(i) {
                var card_1 = document.createElement("div");
                card_1.innerText = _content[_randomContent];
                card_1.className = _status;
                document.getElementById("playground").appendChild(card_1);
                //  card.addEventListener("click", clickHandler);
                card_1.addEventListener("click", function () {
                    card_1.className = cssClassOpenString;
                    openCards.push(_status);
                    cardArray.push(_content[i]);
                    console.log(cardArray[i]);
                    console.log(openCards);
                    if (openCards.length > 1) {
                        prompt("setTimeout");
                    }
                });
            };
            for (var i = 0; i < numPairs; i++) {
                _loop_1(i);
            }
            function clickHandler(_event) {
                logEvent(_event);
                card.className = cssClassOpen[0];
            }
            function logEvent(_event) {
                if (_event == undefined) {
                    console.log("No event object passed");
                    return;
                }
                console.group("EventInfo");
                var info = "Type: " + _event.type;
                info += " | target: " + _event.target;
                info += " | currentTarget: " + _event.currentTarget;
                info += " | phase: " + _event.eventPhase;
                console.log(info);
                console.log(_event);
                console.groupEnd();
            }
            /*  let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
              for (let i: number = 0; i < fieldsets.length; i++) {
                      console.log(fieldsets[i]);
                      console.log(fieldsets[i].textContent);
                  }*/
        }
    };
})(Aufgabe_2 || (Aufgabe_2 = {}));
//# sourceMappingURL=memory2.js.map