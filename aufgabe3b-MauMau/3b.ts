window.onload = function (): void {
    
    let deck: string[] = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"];
    let discard: string[] = [] ;
    let hand: string[] = [] ;
    
    let getDeck: HTMLElement = document.getElementById("deck");
    let getDiscard: HTMLElement = document.getElementById("discard");
    let getHand: HTMLElement = document.getElementById("handcards");
    
//createDiv           
    let createhandcard: HTMLDivElement = document.createElement("div");
    
    //addClick
    getDeck.addEventListener("click", pullCard);
    getHand.addEventListener("click", pushCardToDiscard);
    
    function pullCard(): void {
        
        if (hand.length < 5) {
            console.log(hand.length);
            console.log(deck.length);
        //randomCard
        let randomCard: number = Math.floor((Math.random() * 32 - 1));

            
    let createhandcard: HTMLDivElement = document.createElement("div");
            hand.push(createhandcard.textContent); // Card from deck to hand
            deck.splice(randomCard, 1); // remove card from array
        //addToHand
        document.getElementById("handcards").appendChild(createhandcard);        
        //divContent = zufälliger IndexOfArray
        createhandcard.textContent = deck[randomCard]; 
        }    
    }
        

        
        function pushCardToDiscard(): void {
        
        
        discard.push(createhandcard.textContent);
//        hand.splice(handcard, 1);
            console.log(hand);
                
            
        }
        
};