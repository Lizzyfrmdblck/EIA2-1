window.onload = function () {
    var deck = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik Ass", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz Ass"];
    var discard = [];
    var hand = [];
    var getDeck = document.getElementById("deck");
    var getDiscard = document.getElementById("discard");
    var getHand = document.getElementById("handcards");
    //addClick
    getDeck.addEventListener("click", pullCard);
    function pullCard() {
        if (hand.length < 5 && deck.length > 0) {
            //randomCard
            var randomCard = Math.floor((Math.random() * 32 - 1));
            //createDiv
            var createDiv = document.createElement("div");
            //addToHand
            document.getElementById("handcards").appendChild(createDiv);
            //divContent = zuf�lliger IndexOfArray
            createDiv.textContent = deck[randomCard];
        }
        getHand.addEventListener("click", pushCardToDiscard);
        function pushCardToDiscard() {
            for (var i = 0; i < hand.length; i++) {
                hand.splice(i, 1);
                discard.push(hand[i]);
                break;
            }
            var createDiv = document.createElement("div");
            document.getElementById("discard").textContent = createDiv.textContent + deck.length;
            createDiv.parentNode.removeChild(createDiv);
        }
    }
};
//# sourceMappingURL=3b.js.map