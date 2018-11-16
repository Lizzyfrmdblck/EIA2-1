namespace WBK {
    window.addEventListener("load", init);

    export interface Product {
        name: string;
        price: number;
    }

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");

    let cartArray: Product[] = [];

    function init(): void {



        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

        generateTrees();
        generateBalls();
        generateLametta();
        generateShippingOptions();



    }

    function handleChange(_event: Event): void {

        cartArray.length = 0;

        let cart: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("cart");

        console.log(_event);
        //*/
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        let radioObject: Product = { name: target.id, price: parseInt(target.value) };
        //    let B: Product = { name: target.id, price: parseInt(balls[target.price) };
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (inputs[3].checked == true) {
            console.log("Changed " + target.name + " to " + target.checked);
            cartArray.push({ name: target.id, price: parseInt(target.value) });
            let A: Product = { name: inputs[3].id, price: parseInt(inputs[3].value) };
            cartArray.push(A);
            if (inputs[0].checked == true) {
                console.log("Changed " + target.name + " to " + target.checked);
                cartArray.push({ name: inputs[0].id, price: parseInt(inputs[0].value) });
            }
        }
        //*/
        //*/
        if (target.name == "Slider") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "stepper") {
            //  let multipleBallsPrice: number = parseInt(target.value) * balls[target.name].price;
            console.log(balls[parseInt(target.value)].price);
            console.log(target.value + "hi");
        }
        cartArray.push(radioObject);
        console.log(cartArray);

    }

    function generateTrees(): void {

        for (let i: number = 0; i < trees.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "radio");
            input.setAttribute("name", "trees");
            input.setAttribute("value", String(trees[i].price));
            input.setAttribute("id", trees[i].name);


            document.getElementById("trees").appendChild(input);
            label.innerText = trees[i].name + " " + trees[i].price + "€";
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", trees[i].name);
            console.log(label);
        }
    }

    function generateBalls(): void {

        for (let i: number = 0; i < balls.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            let br: HTMLElement = document.createElement("br");

            input.setAttribute("type", "number");
            input.setAttribute("name", "stepper");
            input.setAttribute("value", String(balls[i].price));
            input.setAttribute("id", balls[i].name);
            document.getElementById("balls").appendChild(input);
            label.innerHTML = balls[i].name + " " + balls[i].price + "€";
            document.getElementById("balls").appendChild(label);
            document.getElementById("balls").appendChild(br);
            console.log(label);

        }
    }

    function generateLametta(): void {

        for (let i: number = 0; i < lametta.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "lametta");
            input.setAttribute("value", String(lametta[i].price));
            input.setAttribute("id", lametta[i].name);


            document.getElementById("lametta").appendChild(input);
            label.innerText = lametta[i].name + " " + lametta[i].price + "€";
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", lametta[i].name);
            console.log(label);
        }
    }

    function generateShippingOptions(): void {

        for (let i: number = 0; i < trees.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "radio");
            input.setAttribute("name", "shippingOptions");
            input.setAttribute("value", String(shippingOptions[i].price));
            input.setAttribute("id", shippingOptions[i].name);


            document.getElementById("shipping").appendChild(input);
            label.innerText = shippingOptions[i].name + " " + shippingOptions[i].price + "€";
            console.log(shippingOptions[i].price + " test ");
            document.getElementById("shipping").appendChild(label);
            label.setAttribute("for", shippingOptions[i].name);
            console.log(label);
        }
    }
}