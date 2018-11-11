/*  
Aufgabe: Aufgabe 3 - UNO
Name: Yannic Hermann
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

    let colors: string[] = ["red", "yellow", "green", "blue"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "<=>", "x"];

    let numCards: string;

    document.addEventListener("DOMContentLoaded", function(): void {

        document.addEventListener("keydown", pullCardKey);
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
            // handCards = deck.splice(deck[randomNum, 1]).concat(handCards);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
        }

        console.log(handCards);
        console.log(deck);


        //Stelle die erzeugten Karten in der HTML dar
        for (let i: number = 0; i < handCards.length; i++) {

            let div: HTMLDivElement = document.createElement("div");
            document.getElementById("handCards").appendChild(div);
            div.classList.add("handCardStyle");
            let id: string = div.id = String(i);

            div.addEventListener("click", dropCard);
            console.log(div);

            /*let card: Card = { color: colors[i], value: values[i] };
              if (card.color = "black") {
              //    div.classList.remove("handCardStyle");
              //  div.classList.add("blackCards");
              div.style.color = "white";        
            */
            div.innerHTML = handCards[i].value;
            div.style.backgroundColor = handCards[i].color;
        }

        // let  : HTMLDivElement = document.getElementsByTagName("")[0];
        // deck.addEventListener("click", pullCard);

    });

    function dropCard(_event: Event): void {
        console.log(_event.target);
        let domCard: HTMLElement = <HTMLElement>_event.target;
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
    }

    function pullCardKey(_event: KeyboardEvent): void {
        console.log(_event.target);
        console.log(_event);
        console.log("keyCode = " + _event.keyCode);

        //console.log(_event.keyCode);

        if (_event.keyCode == 32) {
            console.log("works");
            let randomNum: number = Math.floor(Math.random() * deck.length);
            handCards.push(deck[randomNum]);
            deck.splice(randomNum, 1);
            console.log(deck);
            console.log(handCards);
            displayCard();

        }
    }
    function displayCard(): void {
        
     //   let lastIndex: number = handCards[handCards.lastIndexOf];

        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("handCards").appendChild(div);
        div.classList.add("handCardStyle");
        //let id: string = div.id = String(i);

        console.log(div);

        /*let card: Card = { color: colors[i], value: values[i] };
          if (card.color = "black") {
          //    div.classList.remove("handCardStyle");
          //  div.classList.add("blackCards");
          div.style.color = "white";        
        */
        div.innerHTML = handCards[lastIndex].value;
        div.style.backgroundColor = handCards[lastIndex].color;

    }
}
