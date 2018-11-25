namespace WBK_2 {
    window.addEventListener("load", init);


    let cartArray: Product[] = [];

    function init(): void {

        displayProducts(products);
        //generateBalls();
        //generateLametta();
        //generateShippingOptions();

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleCart);
        }
    }

    function displayProducts(_products: ProductKey): void {
        // mit diesem Schleifenkonstrukt wird Ã¼ber alle SchlÃ¼ssel iteriert (Typannotation ist hier nicht erlaubt)
        for (let key in _products) {
            // zwischenspeichern des Werts, der mit SchlÃ¼ssel assoziiert ist
            let fieldsetId: HTMLFieldSetElement = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);
            document.getElementById("allProducts").appendChild(fieldsetId);
            let legend: HTMLLegendElement = document.createElement("legend");
            fieldsetId.appendChild(legend);
            legend.innerText = key;

            let value: Product[] = _products[key];

            // hÃ¼bsche Sachen, die man mit der Konsole noch machen kann
            //  console.group(key);
            console.log(value);
            //console.groupEnd();
            // der Wert ist ein Array, also wird noch darÃ¼ber iteriert
            //for (let i: number = 0; i < value.length; i++)
            // und die einzelnen DatensÃ¤tze darin ausgegeben
            //displayHeteroPredef(value[i]);

            //wenn Key=trees create radio

            for (let i: number = 0; i < value.length; i++) {

                let input: HTMLInputElement = document.createElement("input");
                let label: HTMLLabelElement = document.createElement("label");

                input.setAttribute("type", "number");
                input.setAttribute("name", "stepper");
                input.setAttribute("value", "");
                input.setAttribute("id", value[i].name);
                // Muss in handleChange
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

    function handleCart(_event: Event): void {

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let cart: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("cart");

        cart.innerHTML = "";

        for (let i: number = 0; i < inputs.length; i++) {

            let priceField: HTMLParagraphElement = document.createElement("p");
            let price: string = inputs[i].getAttribute("price");
            let name: string = inputs[i].getAttribute("name");
            let id: string = inputs[i].getAttribute("id");
            let value: string = inputs[i].getAttribute("value");

            if (inputs[i].checked || value != "") {
                if (id == null || inputs[i].getAttribute("type") == "text") {
                    break;
                }

                cart.appendChild(priceField);
                priceField.innerHTML = id + " " + price + "€";
                // cart.innerText = String(price)[i];
                console.log(price);
            }
        }
    }
}