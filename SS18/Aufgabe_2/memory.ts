namespace Aufgabe_2 {
    window.addEventListener("load", init);
     

    let askPairs: string;
    
    let numPairs: number = parseInt(askPairs);
    
    do  {
    askPairs = prompt ("Wie viele Paare?");
    numPairs = parseInt(askPairs);
    } while ( numPairs < 1 || numPairs > 20); 

   
    let askPlayers: string; 
    let numPlayers: number = parseInt(askPlayers); 
    
    do  {
        askPlayers = prompt ("Wie viele Spieler?");
        numPlayers = parseInt(askPlayers);
    } while (numPlayers < 1 || numPlayers > 4);
    
    
    console.log(askPlayers);
    

    
    console.log(askPairs);
       
    let n: number; 
    let cardContent: string[] = ["A", "B", "C", "D"];
    
    
       
        function init(_event: Event): void {

        let div: HTMLDivElement = document.createElement("div");
        for (let i: number = 0; i < numPairs *2; i++) {            
            document.body.appendChild(div);
            div.innerText = "CardArray";
        }
       /* let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }*/
    }
}