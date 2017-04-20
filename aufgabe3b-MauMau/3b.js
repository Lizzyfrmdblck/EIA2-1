window.onload = function () {
    var deck = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik Ass", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz Ass"];
    var discard = [];
    var hand = [];
    var getDeck = document.getElementById("deck");
    var getDiscard = document.getElementById("discard");
    var getHand = document.getElementById("handcards");
    //createDiv           
    var createhandcard = document.createElement("div");
    //addClick
    getDeck.addEventListener("click", pullCard);
    getHand.addEventListener("click", pushCardToDiscard);
    function pullCard() {
        if (hand.length < 5) {
            console.log(hand.length);
            console.log(deck.length);
            //randomCard
            var randomCard = Math.floor((Math.random() * 32 - 1));
            var createhandcard_1 = document.createElement("div");
            hand.push(createhandcard_1.textContent); // Card from deck to hand
            deck.splice(randomCard, 1); // remove card from array
            //addToHand
            document.getElementById("handcards").appendChild(createhandcard_1);
            //divContent = zuf�lliger IndexOfArray
            createhandcard_1.textContent = deck[randomCard];
        }
    }
    function pushCardToDiscard() {
        discard.push(createhandcard.textContent);
        //        hand.splice(handcard, 1);
        console.log(hand);
    }
};
//# sourceMappingURL=3b.js.map