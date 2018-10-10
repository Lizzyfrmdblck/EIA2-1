/*  
Aufgabe: Aufgabe 0 - Arbeitsfähigkeit
Name: Yannic Hermann
Matrikel: 255279
Datum: 07.10.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener("DOMContentLoaded", function(): void {

    let popUp: string;

    popUp = prompt("Bitte gib Deinen Namen hier ein:");

    if (popUp != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Herzlich Willkommen " + popUp + " :) ";
    }

    console.log("Herzlich Willkommen " + popUp)
    
});
