window.onload = function (): void { 
    //STRING-ARRAYS
    let deck: string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik As"];
    let discard: string[] = []; 
    let hand: string[] = []; 
    
    let getDeck: HTMLElement = document.getElementById("deck");
    let getHand: HTMLElement = document.getElementById("handcards");
    //FUNKTIONSAUFRUFE
    getDeck.addEventListener("click", (pullCard));  
    getHand.addEventListener("click", (pushCardToDiscard)); 
     
         
        function pullCard (): void {
       
            if (hand.length < 5 && deck.length > 0 ) {//NICHT MEHR ALS 5 KARTEN AUF DIE HAND && MEHR ALS 0 KARTEN IM DECK  
             
              let randomCard: number = Math.floor((Math.random() * 32 - 1) + 0); // ZUFÄLLIGE KARTE
                    hand.push(deck[randomCard]); //PUSH RANDOM CARD IN DIE HAND
                    deck.splice(randomCard, 1); //REMOVE THIS CARD OF ARRAY
                    
                    let div: HTMLDivElement = document.createElement("div"); 
                    document.getElementById("handcards").appendChild(div);

                    div.textContent = hand[hand.length - 1]; //CONTENT 
                    
                    document.getElementById("deck").textContent = "Karten uebrig:" + deck.length.toString();//VERBLEIBENDE KARTEN
    }
};
        function pushCardToDiscard(_event: MouseEvent): void {
            let clicktarget: HTMLElement = <HTMLElement>_event.target;// TARGET; DIE KARTE AUF DIE GEKLICKT WIRD
            let card: string = clicktarget.textContent;
            let i: number = 0;
            hand.splice(hand.indexOf(card), 1);//KARTE WIRD NUR IN DER KONSOLE AUS DEM ARRAY ENTFERNT..
            discard.push(card);
            //NÄCHSTER VERZWEIFELTER VERSUCH
//            let div: HTMLDivElement = document.createElement("div"); 
//            document.getElementById("discard").appendChild(div);
//            div.textContent = discard[i];
            console.log(hand);
    }
};