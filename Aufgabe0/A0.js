/*
Aufgabe: (Nummer und Titel der Aufgabe)
Name: (Ihr Name)
Matrikel: (Ihre Matrikelnummer)
Datum: (Datum der letzten Bearbeitung)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    var typename;
    typename = prompt("Bitte geben Sie ihren Namen ein :) ");
    if (typename != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Halli Hallo" + " " + typename;
    }
    if (typename = null) {
        document.getElementsByTagName("div")[0].innerHTML = "Wer bist du? :o";
    }
});
//# sourceMappingURL=A0.js.map