window.onload = function (): void { 

    let deck: string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik As"];
    let discard: string[] = []; 
    let hand: string[] = []; 
    
    let getDeck: HTMLElement = document.getElementById("deck");
    let getHand: HTMLElement = document.getElementById("handcards");
    
    getDeck.addEventListener("click", (pullCard));
    getHand.addEventListener("click", (pushCardToDiscard)); 
     
         
        function pullCard (): void {
       
            if (hand.length < 5 && deck.length > 0 ) {
             
              let randomCard: number = Math.floor((Math.random() * 32 - 1) + 0);
                    hand.push(deck[randomCard]); 
                    deck.splice(randomCard, 1); 
                    
                    let div: HTMLDivElement = document.createElement("div"); 
                    document.getElementById("handcards").appendChild(div);

                    div.textContent = hand[hand.length - 1]; 
                    
                    document.getElementById("deck").textContent = "Karten uebrig:" + deck.length.toString();
    }
};
        function pushCardToDiscard(_event: MouseEvent): void {
            let clicktarget: HTMLElement = <HTMLElement>_event.target;
            let card: string = clicktarget.textContent;

            hand.splice(hand.indexOf(card), 1);
            discard.push(card);
            
            console.log(hand);
    }
};