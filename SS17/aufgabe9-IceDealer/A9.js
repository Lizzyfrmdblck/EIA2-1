var IceDealer;
(function (IceDealer) {
    let allFieldsets = document.getElementsByTagName("fieldset");
    let flavors = ["Zitrone ", "Erbeere ", "Pistazie "];
    let inputsArray = [];
    let fieldset;
    window.addEventListener("load", init);
    console.log("load");
    function init() {
        fieldset = document.getElementsByTagName("fieldset")[1];
        createFlavors();
    }
    function createFlavors() {
        for (let i = 0; i < flavors.length; i++) {
            createInput(flavors[i]);
        }
    }
    function createInput(_flavor) {
        let labelTag = document.createElement("label");
        let inputTag = document.createElement("input");
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
