var WBK_2;
(function (WBK_2) {
    window.addEventListener("load", init);
    let cartArray = [];
    function init() {
        displayProducts(WBK_2.products);
        let fieldsets = document.getElementsByTagName("fieldset");
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
            //wenn Key=trees create radio
            for (let i = 0; i < productKey.length; i++) {
                let input = document.createElement("input");
                let label = document.createElement("label");
                input.setAttribute("type", "number");
                input.setAttribute("name", "stepper");
                input.setAttribute("value", input.value);
                input.setAttribute("id", productKey[i].name);
                input.setAttribute("min", "0");
                input.setAttribute("max", "10");
                // Muss in handleChange
                input.setAttribute("price", String(productKey[i].price));
                console.groupEnd();
                //console.log(input.getAttribute("value"));
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
        let inputs = document.getElementsByTagName("input");
        let cart = document.getElementById("cart");
        cart.innerHTML = "";
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
                cart.appendChild(cartElement);
                cartElement.innerHTML = id + " " + finalPrice + "€";
                let endPrice = finalPrice;
                calcPrice();
            }
        }
        let toPay = document.createElement("div");
        cart.appendChild(document.createElement("hr"));
        cart.appendChild(toPay);
        let endPrice = 0;
        toPay.innerHTML = String(endPrice);
    }
    function calcPrice() {
    }
})(WBK_2 || (WBK_2 = {}));
//# sourceMappingURL=Aufgabe_5.js.map