var WBK;
(function (WBK) {
    window.addEventListener("load", init);
    function init() {
        generateTrees();
        generateBalls();
        generateLametta();
        generateShippingOptions();
    }
    function generateTrees() {
        for (let i = 0; i < WBK.trees.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "trees");
            input.setAttribute("value", "tree" + [i]);
            input.setAttribute("id", "tree" + [i]);
            document.getElementById("trees").appendChild(input);
            label.innerText = WBK.trees[i].name + " " + WBK.trees[i].price + "€";
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", "tree" + [i]);
            console.log(label);
        }
    }
    function generateBalls() {
        for (let i = 0; i < WBK.balls.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            let br = document.createElement("br");
            input.setAttribute("type", "number");
            input.setAttribute("name", "stepper");
            document.getElementById("balls").appendChild(input);
            label.innerHTML = WBK.balls[i].name + " " + WBK.balls[i].price + "€";
            document.getElementById("balls").appendChild(label);
            document.getElementById("balls").appendChild(br);
        }
    }
    function generateLametta() {
        for (let i = 0; i < WBK.lametta.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "lametta");
            input.setAttribute("value", "lametta" + [i]);
            input.setAttribute("id", "lametta" + [i]);
            document.getElementById("lametta").appendChild(input);
            label.innerText = WBK.lametta[i].name + " " + WBK.lametta[i].price + "€";
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", "lametta" + [i]);
            console.log(label);
        }
    }
    function generateShippingOptions() {
        for (let i = 0; i < WBK.trees.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "shippingOptions");
            input.setAttribute("value", "shippingOptions" + [i]);
            input.setAttribute("id", "shippingOptions" + [i]);
            document.getElementById("shipping").appendChild(input);
            label.innerText = WBK.shippingOptions[i].name + " " + WBK.shippingOptions[i].price + "€";
            document.getElementById("shipping").appendChild(label);
            label.setAttribute("for", "shippingOptions" + [i]);
            console.log(label);
        }
    }
})(WBK || (WBK = {}));
//# sourceMappingURL=Aufgabe_4.js.map