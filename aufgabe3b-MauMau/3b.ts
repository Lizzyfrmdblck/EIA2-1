window.onload = function (): void {
    
    let deck: string[] = ["Herz 7", "Herz Dame", "Karo Bube"] ;
    let discard: string[] = [] ;
    let hand: string[] = [] ;
    
    let getDeck: HTMLElement = document.getElementById("deck");
    let getDiscard: HTMLElement = document.getElementById("discard");
    let getHand: HTMLElement = document.getElementById("handcards");
    
    //addClick
    getDeck.addEventListener("click", pullCard);
    
    function pullCard(): void {
        
        //createDiv
        let createDiv: HTMLDivElement = document.createElement("div");
        //addToHand
        document.getElementById("handcards").appendChild(createDiv);
        //randomCard
        let randomCard: number = Math.floor((Math.random() * 3));
        
        //divContent = zufälliges
        createDiv.textContent = deck[randomCard];
    }
            
    };