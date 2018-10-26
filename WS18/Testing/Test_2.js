/*
Aufgabe: Aufgabe 2 - UNO
Name: Yannic Hermann
Matrikel: 255279
Datum: 07.10.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function () {
    let deckArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let handArray = [];
    console.log(deckArray.length + "hi");
    spliceAndPush();
    function spliceAndPush() {
        for (let i = deckArray.length; i >= 0; i--) {
            let rndIndexOfDeck = parseInt(deckArray[Math.floor(Math.random() * deckArray.length - 1)]);
            //  console.log(rndIndexOfDeck);
            console.log(handArray);
            console.log(deckArray);
            handArray = deckArray.splice(rndIndexOfDeck, 1).concat(handArray);
        }
    }
});
//# sourceMappingURL=Test_2.js.map