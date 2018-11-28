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

            let value: Product[] = _products[key];

            //  console.group(key);
            console.log(value);
            //console.groupEnd();

            //wenn Key=trees create radio

            for (let i: number = 0; i < value.length; i++) {

                let input: HTMLInputElement = document.createElement("input");
                let label: HTMLLabelElement = document.createElement("label");

                input.setAttribute("type", "number");
                input.setAttribute("name", "stepper");
                input.setAttribute("value", "0");
                input.setAttribute("id", value[i].name);
                input.setAttribute("min", "0");
                input.setAttribute("max", "10");
                
                
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

            let cartElement: HTMLParagraphElement = document.createElement("p");
            let price: string = inputs[i].getAttribute("price");
            let name: string = inputs[i].getAttribute("name");
            let id: string = inputs[i].getAttribute("id");
            let value: string = inputs[i].getAttribute("value");

            if (inputs[i].checked || value != "0") {
                if (id == null || inputs[i].getAttribute("type") == "text") {
                    break;
                }
                
                console.log(inputs[i].value);

                cart.appendChild(cartElement);
                cartElement.innerHTML = id + " " + price + "€";
                // cart.innerText = String(price)[i];
                console.log(price);
            }   
        }
    }

}