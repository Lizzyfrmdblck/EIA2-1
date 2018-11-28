namespace WBK_2 {
    window.addEventListener("load", init);


    let cartArray: Product[] = [];

    function init(): void {

        displayProducts(products);


        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleCart);
        }
    }

    function displayProducts(_products: ProductKey): void {
        for (let key in _products) {
            let fieldsetId: HTMLFieldSetElement = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);
            document.getElementById("allProducts").appendChild(fieldsetId);
            let legend: HTMLLegendElement = document.createElement("legend");
            fieldsetId.appendChild(legend);
            legend.innerText = key;

            let productKey: Product[] = _products[key];

            //  console.group(key);
            console.log(productKey);
            //console.groupEnd();

            //wenn Key=trees create radio

            for (let i: number = 0; i < productKey.length; i++) {

                let input: HTMLInputElement = document.createElement("input");
                let label: HTMLLabelElement = document.createElement("label");

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

    function handleCart(_event: Event): void {

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let cart: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("cart");

        cart.innerHTML = "";

        for (let i: number = 0; i < inputs.length; i++) {


            let cartElement: HTMLParagraphElement = document.createElement("p");
            let price: string = inputs[i].getAttribute("price");
            let name: string = inputs[i].getAttribute("name");
            let id: string = inputs[i].getAttribute("id");
            let value: string = inputs[i].getAttribute("value");
            let amount: number = Number(inputs[i].value);
            let finalPrice: number = Number(price) * amount;

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

            }
        }

        let toPay: HTMLDivElement = document.createElement("div");
        cart.appendChild(document.createElement("hr"));
        cart.appendChild(toPay);

        let endPrice: number = 0;
        toPay.innerHTML = String(endPrice);
    }


}