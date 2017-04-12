window.onload = function () {
    var deck = ["Herz Dame", "Karo Bube", "Herz Ass"];
    var discard = [];
    var hand = [];
    document.getElementById("deck").addEventListener("click", function pullCard() {
        var randomCard = [deck[Math.floor(Math.random() * deck.length)]];
        var pushRandomCardToDeck = randomCard.push("");
    });
};
//# sourceMappingURL=3b.js.map