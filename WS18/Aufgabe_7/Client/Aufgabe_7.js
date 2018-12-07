var A7;
(function (A7) {
    window.addEventListener("load", init);
    let inputs = document.getElementsByTagName("input");
    function init() {
        displayProducts(A7.products);
        let proofButton = document.getElementById("proof");
        let fieldsets = document.getElementsByTagName("fieldset");
        proofButton.addEventListener("click", proofInput);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleCart);
        }
    }
    function displayProducts(_products) {
        for (let key in _products) {
            let fieldsetId = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);
            document.getElementById("allProducts").appendChild(fieldsetId);
            let legend = document.createElement("legend");
            fieldsetId.appendChild(legend);
            legend.innerText = key;
            let productKey = _products[key];
            //  console.group(key);
            console.log(productKey);
            //console.groupEnd();
            for (let i = 0; i < productKey.length; i++) {
                let input = document.createElement("input");
                let label = document.createElement("label");
                input.setAttribute("type", "number");
                input.setAttribute("name", productKey[i].name);
                input.setAttribute("value", input.value);
                input.setAttribute("id", productKey[i].name);
                input.setAttribute("min", "0");
                input.setAttribute("max", "10");
                input.setAttribute("price", String(productKey[i].price));
                console.groupEnd();
                if (key == "Bäume" || key == "Versand") {
                    input.setAttribute("type", "radio");
                    input.setAttribute("name", key);
                }
                if (fieldsetId.id == key) {
                    fieldsetId.appendChild(input);
                    label.innerText = productKey[i].name + " " + productKey[i].price + "€";
                    fieldsetId.appendChild(label);
                    label.setAttribute("for", productKey[i].name);
                    // console.log(label);
                    label.appendChild(document.createElement("br"));
                }
            }
        }
    }
    function handleCart(_event) {
        let cart = document.getElementById("cart");
        cart.innerHTML = "";
        let cartArray = [];
        for (let i = 0; i < inputs.length; i++) {
            let cartElement = document.createElement("p");
            let price = inputs[i].getAttribute("price");
            let name = inputs[i].getAttribute("name");
            let id = inputs[i].getAttribute("id");
            let value = inputs[i].getAttribute("value");
            let amount = Number(inputs[i].value);
            let finalPrice = Number(price) * amount;
            if (inputs[i].checked || finalPrice != 0) {
                if (id == null || inputs[i].getAttribute("type") == "text") {
                    break;
                }
                console.log("Anzahl " + inputs[i].value);
                console.log("PpS " + price);
                console.log("Preis " + finalPrice);
                if (inputs[i].type == "radio") {
                    finalPrice = Number(price);
                }
                cart.appendChild(cartElement);
                cartElement.innerHTML = id + " " + finalPrice + "€";
                cartArray.push(finalPrice);
            }
        }
        let toPay = document.createElement("div");
        cart.appendChild(document.createElement("hr"));
        cart.appendChild(toPay);
        let endPrice = 0;
        for (let i = 0; i < cartArray.length; i++) {
            endPrice += cartArray[i];
        }
        toPay.innerHTML = "Gesamtpreis: " + String(endPrice) + "€";
    }
    function proofInput() {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == "" && inputs[i].type == "text") {
                alert("Du musst deine Angaben vervollständigen");
                break;
            }
        }
    }
})(A7 || (A7 = {}));
//# sourceMappingURL=Aufgabe_7.js.map