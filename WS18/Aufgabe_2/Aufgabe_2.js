/*
Aufgabe: Aufgabe 0 - Arbeitsf�higkeit
Name: Yannic Hermann
Matrikel: 255279
Datum: 07.10.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function () {
    let stack = ["rot 0", " rot 1", "rot 2", "rot 3"];
    let ablage = [];
    let hand = [];
    console.log(stack);
    let nmbOfCards;
    nmbOfCards = prompt("Mit wie vielen Karten willst Du spielen?");
    /*
        for (nmbOfCards; isNaN(parseInt(nmbOfCards)) || parseInt(nmbOfCards) > 8; nmbOfCards = "") {
            nmbOfCards = prompt("Sorry, Du musst eine Zahl eingeben, die kleiner als 8 ist.");
    
            if (parseInt(nmbOfCards) < 8)
            alert("Okay, Du spielst nun mit " + nmbOfCards + " Karten!");
            
            break;
        }
*/
    if (isNaN(parseInt(nmbOfCards)) || parseInt(nmbOfCards) > 8) {
        nmbOfCards = prompt("Sorry, Du musst eine Zahl eingeben, die kleiner als 8 ist.");
    }
    else {
        alert("Okay, Du spielst nun mit " + nmbOfCards + " Karten!");
    }
    console.log(nmbOfCards);
    for (let i = 0; i < parseInt(nmbOfCards); i++) {
        createCards("#ff0000", 4, 80, 120);
        console.log(nmbOfCards);
    }
    function createCards(_color, _content, _width, _height) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.border = "thin solid black";
        s.position = "relative";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
    }
});
//# sourceMappingURL=Aufgabe_2.js.map