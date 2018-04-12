namespace Aufgabe_2 {
    window.addEventListener("load", init);
     

    let askPairs: string;
    
    let numPairs: number = parseInt(askPairs);
    
    do  {
    askPairs = prompt ("Wie viele Paare?");
    
    } while ( numPairs < 1 || numPairs > 20); 

   
  /*  let askPlayers: string = prompt ("Wie viele Spieler?");
    let numPlayers: number = parseInt(askPlayers); 
    
    if (numPlayers < 1 || numPlayers > 4) {
        {askPlayers}       
    } 
    
    console.log(askPlayers);
    */

    
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