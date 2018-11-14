/*
Aufgabe: Aufgabe 3 - UNO
Card: Yannic Hermann
Matrikel: 255279
Datum: 11.11.18
    
>>Abgabe noch nicht funktionsf�hig. Bin in Zeile 139 stehen geblieben.

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A2;
(function (A2) {
    let handCards = [];
    let deck = [];
    let discard = [];
    let colors = ["red", "yellow", "green", "blue"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "<=>", "x"];
    let numCards;
    document.addEventListener("DOMContentLoaded", function () {
        document.addEventListener("keydown", pullCardKey);
        let sortButton = document.getElementById("sort");
        sortButton.addEventListener("click", sortCards);
        console.log(deck);
        createPlaceholder();
        /*  Begrenzung, falls mehrere Spieler implementiert werden
                
                if (isNaN(parseInt(numCards)) || parseInt(numCards) > 8) {
                    numCards = prompt("Sorry, Du musst eine Zahl eingeben, die kleiner als 8 ist.");
                } else {
                    alert("Okay, Du spielst nun mit " + numCards + " Karten!");
                }
        */
        //Generiere das Kartendeck
        for (let i = 0; i < colors.length; i++) {
            for (let a = 0; a < values.length; a++) {
                for (let n = 0; n < 2; n++) {
                    let card = { color: colors[i], value: values[a] };
                    deck.push(card);
                }
            }
        }
        //�berfl�ssige 0er entfernen und schwarze Karten hinzuf�gen
        deck.splice(0, 1);
        deck.splice(25, 1);
        deck.splice(50, 1);
        deck.splice(75, 1);
        deck.push({ color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" });
        numCards = prompt("Mit wie vielen Karten willst Du spielen?");
        //Push so viele Karten in den HandArray, wie der Nutzer w�nscht und l�sche diese aus dem Deck
        for (let i = 0; i < parseInt(numCards); i++) {
            let randomNum = Math.floor(Math.random() * deck.length);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
        }
        console.log(handCards);
        console.log(deck);
        displayCards();
        //Stelle die erzeugten Karten in der HTML dar
    });
    function displayCards() {
        for (let i = 0; i < handCards.length; i++) {
            let div = document.createElement("div");
            document.getElementById("handCards").appendChild(div);
            div.classList.add("handCardStyle");
            let id = div.id = String(i);
            div.addEventListener("click", dropCard);
            console.log(div);
            div.innerHTML = handCards[i].value;
            div.style.backgroundColor = handCards[i].color;
        }
    }
    function sortCards(_event) {
        console.log(handCards);
        handCards.sort(compareCards);
        deleteCards();
        displayCards();
        console.log(handCards);
    }
    function deleteCards() {
        document.getElementById("discard").getElementsByTagName("div");
        //mit Schleife
    }
    function compareCards(_a, _b) {
        let cardA = _a.color.toUpperCase(); // ignore upper and lowercase
        let cardB = _b.color.toUpperCase(); // ignore upper and lowercase
        if (cardA < cardB) {
            return -1;
        }
        if (cardA > cardB) {
            return 1;
        }
        // Cards m�ssen gleich sein
        return 0;
    }
    console.log("bevor click " + discard.length);
    function dropCard(_event) {
        console.log(_event.target);
        let domCard = _event.target;
        let div = document.createElement("div");
        console.log("nach click " + discard.length);
        console.log(discard);
        discard.splice(0, 1);
        console.log(discard);
        discard.push({ color: div.style.backgroundColor = domCard.style.backgroundColor, value: div.innerHTML = domCard.innerHTML });
        domCard.remove();
        document.getElementById("discard").getElementsByTagName("div")[0].remove();
        document.getElementById("discard").appendChild(div);
        div.classList.add("handCardStyle");
    }
    //Nachziehstapel
    function createPlaceholder() {
        let div = document.createElement("div");
        document.getElementById("deck").appendChild(div);
        div.classList.add("placeholder");
        div.innerHTML += "UNO";
        div.addEventListener("click", pullCardClick);
    }
    function pullCardClick(_event) {
        console.log("works" + _event.target);
        let randomNum = Math.floor(Math.random() * deck.length);
        handCards.push(deck[randomNum]);
        deck.splice(randomNum, 1);
        displayCard();
    }
    function pullCardKey(_event) {
        console.log(_event.target);
        console.log(_event);
        console.log("keyCode = " + _event.keyCode);
        if (_event.keyCode == 32) {
            let randomNum = Math.floor(Math.random() * deck.length);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
            displayCard();
        }
    }
    function displayCard() {
        let lastIndexHandCards = handCards.length - 1;
        if (lastIndexHandCards >= 108) {
            alert("Keine Karten mehr auf dem Stapel.");
        }
        else {
            console.log("lastIndex " + lastIndexHandCards);
            let div = document.createElement("div");
            document.getElementById("handCards").appendChild(div);
            div.classList.add("handCardStyle");
            div.innerHTML = handCards[lastIndexHandCards].value;
            div.style.backgroundColor = handCards[lastIndexHandCards].color;
            div.addEventListener("click", dropCard);
            let id = div.id = String(lastIndexHandCards);
        }
    }
})(A2 || (A2 = {}));
//# sourceMappingURL=Aufgabe_2.1.js.map