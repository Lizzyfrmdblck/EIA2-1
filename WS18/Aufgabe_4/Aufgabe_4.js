var WBK;
(function (WBK) {
    window.addEventListener("load", init);
    let inputs = document.getElementsByTagName("input");
    let cartArray = [];
    function init() {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        generateTrees();
        generateBalls();
        generateLametta();
        generateShippingOptions();
    }
    function handleChange(_event) {
        cartArray.length = 0;
        let cart = document.getElementById("cart");
        console.log(_event);
        //*/
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        let radioObject = { name: target.id, price: parseInt(target.value) };
        //    let B: Product = { name: target.id, price: parseInt(balls[target.price) };
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (inputs[3].checked == true) {
            console.log("Changed " + target.name + " to " + target.checked);
            cartArray.push({ name: target.id, price: parseInt(target.value) });
            let A = { name: inputs[3].id, price: parseInt(inputs[3].value) };
            cartArray.push(A);
            if (inputs[0].checked == true) {
                console.log("Changed " + target.name + " to " + target.checked);
                cartArray.push({ name: inputs[0].id, price: parseInt(inputs[0].value) });
            }
        }
        //*/
        //*/
        if (target.name == "Slider") {
            let progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "stepper") {
            //  let multipleBallsPrice: number = parseInt(target.value) * balls[target.name].price;
            console.log(WBK.balls[parseInt(target.value)].price);
            console.log(target.value + "hi");
        }
        cartArray.push(radioObject);
        console.log(cartArray);
    }
    function generateTrees() {
        for (let i = 0; i < WBK.trees.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "trees");
            input.setAttribute("value", String(WBK.trees[i].price));
            input.setAttribute("id", WBK.trees[i].name);
            document.getElementById("trees").appendChild(input);
            label.innerText = WBK.trees[i].name + " " + WBK.trees[i].price + "€";
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", WBK.trees[i].name);
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
            input.setAttribute("value", String(WBK.balls[i].price));
            input.setAttribute("id", WBK.balls[i].name);
            document.getElementById("balls").appendChild(input);
            label.innerHTML = WBK.balls[i].name + " " + WBK.balls[i].price + "€";
            document.getElementById("balls").appendChild(label);
            document.getElementById("balls").appendChild(br);
            console.log(label);
        }
    }
    function generateLametta() {
        for (let i = 0; i < WBK.lametta.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "lametta");
            input.setAttribute("value", String(WBK.lametta[i].price));
            input.setAttribute("id", WBK.lametta[i].name);
            document.getElementById("lametta").appendChild(input);
            label.innerText = WBK.lametta[i].name + " " + WBK.lametta[i].price + "€";
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", WBK.lametta[i].name);
            console.log(label);
        }
    }
    function generateShippingOptions() {
        for (let i = 0; i < WBK.trees.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "shippingOptions");
            input.setAttribute("value", String(WBK.shippingOptions[i].price));
            input.setAttribute("id", WBK.shippingOptions[i].name);
            document.getElementById("shipping").appendChild(input);
            label.innerText = WBK.shippingOptions[i].name + " " + WBK.shippingOptions[i].price + "€";
            console.log(WBK.shippingOptions[i].price + " test ");
            document.getElementById("shipping").appendChild(label);
            label.setAttribute("for", WBK.shippingOptions[i].name);
            console.log(label);
        }
    }
})(WBK || (WBK = {}));
//# sourceMappingURL=Aufgabe_4.js.map