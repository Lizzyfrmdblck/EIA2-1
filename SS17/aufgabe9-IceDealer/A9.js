var IceDealer;
(function (IceDealer) {
    var allFieldsets = document.getElementsByTagName("fieldset");
    var flavors = ["Zitrone ", "Erbeere ", "Pistazie "];
    var inputsArray = [];
    var fieldset;
    window.addEventListener("load", init);
    console.log("load");
    function init() {
        fieldset = document.getElementsByTagName("fieldset")[1];
        createFlavors();
    }
    function createFlavors() {
        for (var i = 0; i < flavors.length; i++) {
            createInput(flavors[i]);
        }
    }
    function createInput(_flavor) {
        var labelTag = document.createElement("label");
        var inputTag = document.createElement("input");
        labelTag.innerText = _flavor;
        labelTag.appendChild(inputTag);
        inputTag.type = "number";
        inputTag.id = "flavors";
        inputTag.placeholder = "0";
        inputTag.min = "0";
        inputTag.max = "10";
        fieldset.appendChild(labelTag);
    }
})(IceDealer || (IceDealer = {}));
//# sourceMappingURL=A9.js.map