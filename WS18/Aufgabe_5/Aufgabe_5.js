var WBK_2;
(function (WBK_2) {
    window.addEventListener("load", init);
    let cartArray = [];
    function init() {
        displayProducts(WBK_2.products);
        //generateBalls();
        //generateLametta();
        //generateShippingOptions();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleCart);
        }
    }
    function displayProducts(_products) {
        // mit diesem Schleifenkonstrukt wird Ã¼ber alle SchlÃ¼ssel iteriert (Typannotation ist hier nicht erlaubt)
        for (let key in _products) {
            // zwischenspeichern des Werts, der mit SchlÃ¼ssel assoziiert ist
            let fieldsetId = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);
            document.getElementById("allProducts").appendChild(fieldsetId);
            let legend = document.createElement("legend");
            fieldsetId.appendChild(legend);
            legend.innerText = key;
            let value = _products[key];
            // hÃ¼bsche Sachen, die man mit der Konsole noch machen kann
            //  console.group(key);
            console.log(value);
            //console.groupEnd();
            // der Wert ist ein Array, also wird noch darÃ¼ber iteriert
            //for (let i: number = 0; i < value.length; i++)
            // und die einzelnen DatensÃ¤tze darin ausgegeben
            //displayHeteroPredef(value[i]);
            //wenn Key=trees create radio
            for (let i = 0; i < value.length; i++) {
                let input = document.createElement("input");
                let label = document.createElement("label");
                input.setAttribute("type", "number");
                input.setAttribute("name", "stepper");
                input.setAttribute("value", "");
                input.setAttribute("id", value[i].name);
                input.setAttribute("min", "0");
                input.setAttribute("max", "10");
                input.setAttribute("price", String(value[i].price));
                console.groupEnd();
                //console.log(input.getAttribute("value"));
                if (key == "Bäume" || key == "Versand") {
                    input.setAttribute("type", "radio");
                    input.setAttribute("name", key);
                }
                if (fieldsetId.id == key) {
                    fieldsetId.appendChild(input);
                    label.innerText = value[i].name + " " + value[i].price + "€";
                    fieldsetId.appendChild(label);
                    label.setAttribute("for", value[i].name);
                    // console.log(label);
                    label.appendChild(document.createElement("br"));
                }
            }
        }
    }
    function handleCart(_event) {
        let inputs = document.getElementsByTagName("input");
        let cart = document.getElementById("cart");
        let cartElement = document.createElement("p");
        cart.innerHTML = "";
        for (let i = 0; i < inputs.length; i++) {
            let price = inputs[i].getAttribute("price");
            let name = inputs[i].getAttribute("name");
            let id = inputs[i].getAttribute("id");
            let value = inputs[i].getAttribute("value");
            if (inputs[i].checked || value != "") {
                if (id == null || inputs[i].getAttribute("type") == "text") {
                    break;
                }
                cart.appendChild(cartElement);
                cartElement.innerHTML = id + " " + price + "€";
                // cart.innerText = String(price)[i];
                console.log(price);
            }
        }
    }
})(WBK_2 || (WBK_2 = {}));
//# sourceMappingURL=Aufgabe_5.js.map