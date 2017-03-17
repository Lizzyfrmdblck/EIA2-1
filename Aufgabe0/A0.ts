document.addEventListener('DOMContentLoaded', function(){

    var typename: string;
    
    typename = prompt("Bitte geben Sie ihren Namen ein :) ");
    
    if (typename != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Halli Hallo" + " " + typename;    
    }
});