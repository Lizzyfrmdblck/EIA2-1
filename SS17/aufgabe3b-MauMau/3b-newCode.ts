
namespace maumau {
    let deck: string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz Ass", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik Ass"];
    let discard: string[] = [];
    let hand: string[] = [];
    
window.onload = function (): void {

        document.getElementById("deck").addEventListener("click", pullRandomCard);
        document.getElementById("handcards").addEventListener("click", removeCard);
};     

    function pullRandomCard(): void {
        
        if (hand.length < 5 && deck.length > 0) {
            
            let randomCard: number = Math.floor((Math.random() * deck.length - 1) + 0); // ZUFÄLLIGE KARTE
            hand.push(deck[randomCard]); //PUSH RANDOM CARD IN DIE HAND
            deck.splice(randomCard, 1); //REMOVE THIS CARD OF ARRAY
            //Get Divs and append child to "handcards"
            let handCard: HTMLElement = document.getElementById("handcards");
            let div: HTMLDivElement = document.createElement("div"); 
            document.getElementById("handcards").appendChild(div);
                   
            handCard.innerHTML = "";
            for (let i: number = 0; i < hand.length; i++) {
            //  Div Content at i-th place    
            let divWithContent: HTMLElement = document.createElement("div");
            divWithContent.textContent = hand[i];
            handCard.appendChild(divWithContent);
        }
            console.log(deck);
            console.log(hand);
    }

}
        
    function removeCard(_event: MouseEvent): void {
        let click: HTMLElement = <HTMLElement>_event.target;    //get mouse target
        let handCard: string = click.textContent; //content
        hand.splice(hand.indexOf(handCard), 1); //remove index of Array 
        discard.push(handCard); // push to discard
        click.parentNode.removeChild(click); // remove the div, which clicked
        
        //Content & Visuals
        if (discard.length > 0) {   
        document.getElementById("discard").textContent = discard[discard.length - 1];
            
        if (deck.length == 0) {
            let deckDiv: HTMLElement = document.getElementById("deck");
            deckDiv.parentNode.removeChild(deckDiv);
            
            let discardDiv: HTMLElement = document.getElementById("discard");
            discardDiv.innerHTML = ("ENDE");
            }
        }       

    }
};


