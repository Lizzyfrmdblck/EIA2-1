namespace Aufgabe_2 {
    window.onload = function (): void {
     
    let n: number; 
    let cardContent: string[] = ["A", "B", "C", "D"];
    let cardArray: string[];
    let askPairs: string;
    let numPairs: number = parseInt(askPairs);  
    let askPlayers: string; 
    let numPlayers: number = parseInt(askPlayers); 
    let card: HTMLDivElement = document.createElement("div");
    let cssClass: string [] = ["hidden"];

/*Asking how many Pairs + Check if it's in range + if it's a number*/
    do  {
    askPairs = prompt ("Wie viele Paare?");
    numPairs = parseInt(askPairs);
    
    } while (numPairs < 1 || numPairs > 20); 
     
/*    do  {
    askPairs = prompt ("Wie viele Paare?");
    numPairs = parseInt(askPairs);
    
    } while (isNaN(numPairs) || isNaN(numPairs));
   Gebe ich zuerst eine falsche Nummer oder einen String ein funktionieren beide Abfragen. 
   Nach der String-Test kann ich aber auch Zahlen auﬂerhalb der Range eingeben und er springt weiter. 
   Ich bin mir ziemlich sicher, dass es daran liegt, dass die Abfragen in 2 versch. Schleifen stattfinden.
   Wenn ich beide Abfragen in eine Schleife gepackt habe, habe ich es aber nicht zum Laufen gebracht.*/

   
/*Asking how many Players + Check if it's in range + if it's a number*/
    do  {
    askPlayers = prompt ("Wie viele Spieler?");
    numPlayers = parseInt(askPlayers);
    
    } while (numPlayers < 1 || numPlayers > 4); 
     
/*    do  {
    askPlayers = prompt ("Wie viele Spieler?");
    numPlayers = parseInt(askPlayers);
    
    } while (isNaN(numPlayers) || isNaN(numPlayers)); 
*/        
    console.log(askPlayers);
    console.log(askPairs);
    
    createCard(cardContent, cssClass);
    createPlayer(cardContent);
    createCards(numPairs);
    
    
    console.log(cardArray);
    console.log(cardContent);
    
    function createCards(_numPairs: number): void {
    for ( let i: number = 0; i < numPairs; i++) {
        cardArray.push(cardContent[i]);        
        }
    for (let i: number = 0; i < cardArray.length; i++) {
        randomNumber;
        }
    }

    function randomNumber(_min: number, _max: number): void {
        _min = 0;
        _max = cardArray.length;
        Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
    


    function createCard(_content: string[], _status: string[]): void {    
    for (let i: number = 0; i < numPairs * 2; i++) {    
    let card: HTMLDivElement = document.createElement("div");

   /*card.innerText = "Test";*/
    
    document.getElementById("playground").appendChild(card);
        }
    }

    function createPlayer(_player: string[]): void {
    for (let i: number = 0; i < numPlayers; i++) {
    let player: HTMLDivElement = document.createElement("div");
    let playerCounter: number [] = [1, 2, 3, 4];

    player.innerText = "Player" + playerCounter[i]; 
    document.getElementById("player").appendChild(player);

    }
}

  /*  let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
    for (let i: number = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }*/
    };
}