window.onload = function () {
    var deck = ["Herz 7", "Herz Dame", "Karo Bube", "Karo Dame", "Herz K�nig"];
    var discard = [];
    var hand = [];
    var getDeck = document.getElementById("deck");
    var getDiscard = document.getElementById("discard");
    var getHand = document.getElementById("handcards");
    //addClick
    getDeck.addEventListener("click", pullCard);
    function pullCard() {
        //createDiv
        var createDiv = document.createElement("div");
        //addToHand
        document.getElementById("handcards").appendChild(createDiv);
        //randomCard
        var randomCard = Math.floor((Math.random() * 3));
        //divContent = zuf�lliges
        createDiv.textContent = deck[randomCard];
    }
};
//# sourceMappingURL=3b.js.map