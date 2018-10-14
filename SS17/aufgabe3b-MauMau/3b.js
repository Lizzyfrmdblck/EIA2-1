window.onload = function () {
    let deck = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz King", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik King", "Pik Ass", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz King", "Kreuz Ass"];
    let discard = [];
    let hand = [];
    let getDeck = document.getElementById("deck");
    let getDiscard = document.getElementById("discard");
    let getHand = document.getElementById("handcards");
    //createDiv           
    let createhandcard = document.createElement("div");
    //addClick
    getDeck.addEventListener("click", pullCard);
    getHand.addEventListener("click", pushCardToDiscard);
    function pullCard() {
        if (hand.length < 5) {
            console.log(hand.length);
            console.log(deck.length);
            //randomCard
            let randomCard = Math.floor((Math.random() * 31 - 1));
            let createhandcard = document.createElement("div");
            hand.push(createhandcard.textContent); // Card from deck to hand
            deck.splice(randomCard, 1); // remove card from array
            //addToHand
            document.getElementById("handcards").appendChild(createhandcard);
            //divContent = zuf�lliger IndexOfArray
            createhandcard.textContent = deck[randomCard];
        }
    }
    function pushCardToDiscard() {
        discard.push(createhandcard.textContent);
        //        hand.splice(handcard, 1);
        console.log(hand);
    }
};
//# sourceMappingURL=3b.js.map