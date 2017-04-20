window.onload = function (): void {
    
    let deck: string[] = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass"];
    let discard: string[] = [] ;
    let hand: string[] = [] ;
    
    let getDeck: HTMLElement = document.getElementById("deck");
    let getDiscard: HTMLElement = document.getElementById("discard");
    let getHand: HTMLElement = document.getElementById("handcards");
    
    //addClick
    getDeck.addEventListener("click", pullCard);
    
    function pullCard(): void {
        
        if (hand.length < 5 && deck.length > 0) {
        //randomCard
        let randomCard: number = Math.floor((Math.random() * 32 - 1));

        //createDiv
        let createDiv: HTMLDivElement = document.createElement("div");
        //addToHand
        document.getElementById("handcards").appendChild(createDiv);        
        //divContent = zufälliger IndexOfArray
        createDiv.textContent = deck[randomCard]; 
            
        }
        
    getHand.addEventListener("click", pushCardToDiscard);
        
        function pushCardToDiscard(): void {
            
        for (var i: number = 0; i < hand.length; i++) {
            hand.splice(i, 1);
            discard.push(hand[i]);
            break;
        }
        let createDiv: HTMLDivElement = document.createElement("div");
        document.getElementById("discard").textContent = createDiv.textContent + deck.length;
        createDiv.parentNode.removeChild(createDiv);
}
    }        
};