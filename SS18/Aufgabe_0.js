/*
Aufgabe: Aufgabe 0 - Arbeitsf�higkeit
Name: Yannic Hermann
Matrikel: 255279
Datum: 21.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function () {
    var popUp;
    popUp = prompt("Bitte gib Deinen Namen hier ein:");
    if (popUp != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Herzlich Willkommen " + popUp;
    }
    else {
        popUp = prompt("Versuch es doch einfach nochmal..");
    }
});
//# sourceMappingURL=Aufgabe_0.js.map