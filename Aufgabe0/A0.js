document.addEventListener('DOMContentLoaded', function () {
    var typename;
    typename = prompt("Bitte geben Sie ihren Namen ein :) ");
    if (typename != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Halli Hallo" + " " + typename;
    }
});
//# sourceMappingURL=A0.js.map