/*  
Aufgabe: Aufgabe 2 - UNO
Name: Yannic Hermann
Matrikel: 255279
Datum: 25.10.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A2 {
    document.addEventListener("DOMContentLoaded", function(): void {

        interface Card {
            color: string;
            value: string;
        }

        let deck: Card[] = [];
        let handCards: Card[] = [];

        let colors: string[] = ["red", "yellow", "green", "blue"];
        let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "<=>", "x"];

        let numCards: string;

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
        //Unkonventionelle Art, die überflüssigen 0er zu entfernen
        deck.splice(0, 1);
        deck.splice(25, 1);
        deck.splice(50, 1);
        deck.splice(75, 1);

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
            div.innerHTML = handCards[i].value;
            div.style.backgroundColor = handCards[i].color;
        }

    });

    //Nachziehstapel
    function createPlaceholder(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("deck").appendChild(div);
        div.classList.add("placeholder");
        div.innerHTML += "UNO";
    }
}