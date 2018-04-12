namespace Aufgabe_2 {
    window.addEventListener("load", init);
     
    
    let askPlayers: string = prompt ("Wie viele Spieler?");
    let numPlayers: number = parseInt(askPlayers); 

    
    if (numPlayers < 1 || numPlayers > 4) {
        {askPlayers}       
    } 
    
    console.log(askPlayers);
    
    let askPairs: string = prompt ("Wie viele Paare?");
    let numPairs: number = parseInt(askPairs);
    
    while ( numPairs < 1 || numPairs > 20) 
        {askPairs} 
    
    console.log(askPairs);
       
    let n: number; 
    let cardContent: string[] = ["A", "B", "C", "D"];
    
    
       
        function init(_event: Event): void {

        let div: HTMLDivElement = document.createElement("div");
        div.innerText = "Test";
        console.log(document);
        document.body.appendChild(div);

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }
    }
}