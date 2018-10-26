/*  
Aufgabe: Aufgabe 2 - UNO
Name: Yannic Hermann
Matrikel: 255279
Datum: 07.10.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener("DOMContentLoaded", function(): void {

    let deckArray: string[] = [];
    let discardArray: string[] = [];
    let handArray: string[] = [];

    let cardNumbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let cardColours: string[] = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];

    /*
    let deck: HTMLElement = document.getElementById("deck");
    let discard: HTMLElement = document.getElementById("discard");
    let handCards: HTMLElement = document.getElementById("handcards");
*/
    console.log(deckArray);


    let nmbOfCards: string;
    nmbOfCards = prompt("Mit wie vielen Karten willst Du spielen?");

    /*
        for (nmbOfCards; isNaN(parseInt(nmbOfCards)) || parseInt(nmbOfCards) > 8; nmbOfCards = "") {
            nmbOfCards = prompt("Sorry, Du musst eine Zahl eingeben, die kleiner als 8 ist.");
    
            if (parseInt(nmbOfCards) < 8)
            alert("Okay, Du spielst nun mit " + nmbOfCards + " Karten!");
            
            break;
        }
*/

    createPlaceholder("#000000", 80, 120);



    if (isNaN(parseInt(nmbOfCards)) || parseInt(nmbOfCards) > 8) {
        nmbOfCards = prompt("Sorry, Du musst eine Zahl eingeben, die kleiner als 8 ist.");
    } else {
        alert("Okay, Du spielst nun mit " + nmbOfCards + " Karten!");
    }

    console.log(nmbOfCards);
    //Generiere das Deck (noch nicht funktionsfähig) 
    for (let i: number = 0; i < 30; i++) {
        createDeckCards("#ff0000", 4);
        console.log(nmbOfCards);
    }

    //Gib so viele Karten aus wie der Nutzer wünscht
    for (let i: number = 0; i < parseInt(nmbOfCards); i++) {

        let randomColour: string = cardColours[Math.floor(Math.random() * cardColours.length)];
        let randomNumber: string = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
        createHandCards(randomColour, randomNumber, 80, 120);
        console.log(nmbOfCards);

    }
    //Nachziehstapel
    function createPlaceholder(_color: string, _width: number, _height: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("deck").appendChild(div);
        div.classList.add("placeholder");
        div.innerHTML += "UNO";
    }
    function createDeckCards(_color: string, _content: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("deck").appendChild(div);
        div.classList.add("deckStyle");
    }

    function createHandCards(_color: string, _content: string, _width: number, _height: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("handCards").appendChild(div);
        div.classList.add("handCardStyle");
        div.innerHTML = _content;

        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "relative";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
    }

    function createRandomContent(): void {



        //    console.log(randomColour);
    }



});
