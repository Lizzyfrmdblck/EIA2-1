/*  
Aufgabe: Aufgabe 3 - UNO
Card: Yannic Hermann
Matrikel: 255279
Datum: 11.11.18
    
>>Abgabe noch nicht funktionsfähig. Bin in Zeile 139 stehen geblieben.

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A2 {


    interface Card {
        color: string;
        value: string;
    }

    let handCards: Card[] = [];

    let deck: Card[] = [];

    let discard: Card[] = [];


    let colors: string[] = ["red", "yellow", "green", "blue"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "<=>", "x"];

    let numCards: string;


    document.addEventListener("DOMContentLoaded", function(): void {

        document.addEventListener("keydown", pullCardKey);

        let sortButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sort");
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
        for (let i: number = 0; i < colors.length; i++) {
            for (let a: number = 0; a < values.length; a++) {
                for (let n: number = 0; n < 2; n++) {
                    let card: Card = { color: colors[i], value: values[a] };
                    deck.push(card);
                }
            }
        }
        //Überflüssige 0er entfernen und schwarze Karten hinzufügen
        deck.splice(0, 1);
        deck.splice(25, 1);
        deck.splice(50, 1);
        deck.splice(75, 1);
        deck.push({ color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "+4 & color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" }, { color: "black", value: "color choice" });

        numCards = prompt("Mit wie vielen Karten willst Du spielen?");

        //Push so viele Karten in den HandArray, wie der Nutzer wünscht und lösche diese aus dem Deck
        for (let i: number = 0; i < parseInt(numCards); i++) {
            let randomNum: number = Math.floor(Math.random() * deck.length);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
        }

        console.log(handCards);
        console.log(deck);
        displayCards();


        //Stelle die erzeugten Karten in der HTML dar

    });

    function displayCards(): void {

        for (let i: number = 0; i < handCards.length; i++) {

            let div: HTMLDivElement = document.createElement("div");

            document.getElementById("handCards").appendChild(div);
            div.classList.add("handCardStyle");
            let id: string = div.id = String(i);

            div.addEventListener("click", dropCard);
            //console.log(div);

            div.innerHTML = handCards[i].value;
            div.style.backgroundColor = handCards[i].color;
        }
    }

    function sortCards(_event: MouseEvent): void {

        console.log(handCards);

        handCards.sort(compareCards);
        deleteCards();
        displayCards();

        console.log(handCards);


    }

    function deleteCards(): void {
        /*for (let i: number = 0; i < handCards.length; i++) {
            let div: HTMLDivElement = document.getElementsByTagName("div")[i];
            let divContainer: HTMLElement = document.getElementById("container");

            let parent: HTMLFieldSetElement = document.getElementsByTagName("fieldset")[2];
            console.log(parent);
            parent.removeChild(div);
            }//mit Schleife*/
        let myNode: HTMLElement = document.getElementById("handCards");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);

        }

    }

    function compareCards(_a: Card, _b: Card): number {
        let cardA: string = _a.color.toUpperCase(); // ignore upper and lowercase
        let cardB: string = _b.color.toUpperCase(); // ignore upper and lowercase
        if (cardA < cardB) {
            return -1;
        }
        if (cardA > cardB) {
            return 1;
        }

        // Cards müssen gleich sein

        return 0;
    }

    console.log("bevor click " + discard.length);

    function dropCard(_event: Event): void {

        console.log(_event.target);
        let domCard: HTMLElement = <HTMLElement>_event.target;
        let div: HTMLDivElement = document.createElement("div");

        console.log("nach click " + discard.length);

        console.log(discard);
        console.log(domCard.id);
        
        let id: number = parseInt(domCard.id);

        console.log(id);
        discard.push({ color: div.style.backgroundColor = domCard.style.backgroundColor, value: div.innerHTML = domCard.innerHTML });
        //discard.push(handCards[id]);
        handCards.splice(id, 1);

        domCard.remove();
        document.getElementById("discard").getElementsByTagName("div")[0].remove();
        document.getElementById("discard").appendChild(div);
        div.classList.add("handCardStyle");
    }

    //Nachziehstapel
    function createPlaceholder(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("deck").appendChild(div);
        div.classList.add("placeholder");
        div.innerHTML += "UNO";
        div.addEventListener("click", pullCardClick);
    }

    function pullCardClick(_event: Event): void {
        console.log("works" + _event.target);

        let randomNum: number = Math.floor(Math.random() * deck.length);
        handCards.push(deck[randomNum]);
        deck.splice(randomNum, 1);
        displayCard();

    }

    function pullCardKey(_event: KeyboardEvent): void {
        console.log(_event.target);
        console.log(_event);
        console.log("keyCode = " + _event.keyCode);

        if (_event.keyCode == 32) {
            let randomNum: number = Math.floor(Math.random() * deck.length);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
            displayCard();
        }
    }

    function displayCard(): void {

        let lastIndexHandCards: number = handCards.length - 1;

        if (lastIndexHandCards >= 108) {
            alert("Keine Karten mehr auf dem Stapel.");
        }
        else {
            console.log("lastIndex " + lastIndexHandCards);
            let div: HTMLDivElement = document.createElement("div");
            document.getElementById("handCards").appendChild(div);
            div.classList.add("handCardStyle");
            div.innerHTML = handCards[lastIndexHandCards].value;
            div.style.backgroundColor = handCards[lastIndexHandCards].color;
            div.addEventListener("click", dropCard);
            let id: string = div.id = String(lastIndexHandCards);

        }
    }
}
