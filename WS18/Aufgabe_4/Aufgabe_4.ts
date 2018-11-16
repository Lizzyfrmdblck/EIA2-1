namespace WBK {
    window.addEventListener("load", init);

    export interface Product {
        name: string;
        price: number;
    }



    function init(): void {

        generateTrees();
        generateBalls();
        generateLametta();
        generateShippingOptions();
    }

    function generateTrees(): void {

        for (let i: number = 0; i < trees.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "radio");
            input.setAttribute("name", "trees");
            input.setAttribute("value", "tree" + [i]);
            input.setAttribute("id", "tree" + [i]);


            document.getElementById("trees").appendChild(input);
            label.innerText = trees[i].name + " " + trees[i].price + "€";
            document.getElementById("trees").appendChild(label);
            label.setAttribute("for", "tree" + [i]);
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
            document.getElementById("balls").appendChild(input);
            label.innerHTML = balls[i].name + " " + balls[i].price + "€";
            document.getElementById("balls").appendChild(label);
            document.getElementById("balls").appendChild(br);

        }
    }

    function generateLametta(): void {

        for (let i: number = 0; i < lametta.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "lametta");
            input.setAttribute("value", "lametta" + [i]);
            input.setAttribute("id", "lametta" + [i]);


            document.getElementById("lametta").appendChild(input);
            label.innerText = lametta[i].name + " " + lametta[i].price + "€";
            document.getElementById("lametta").appendChild(label);
            label.setAttribute("for", "lametta" + [i]);
            console.log(label);
        }
    }

    function generateShippingOptions(): void {

        for (let i: number = 0; i < trees.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "radio");
            input.setAttribute("name", "shippingOptions");
            input.setAttribute("value", "shippingOptions" + [i]);
            input.setAttribute("id", "shippingOptions" + [i]);


            document.getElementById("shipping").appendChild(input);
            label.innerText = shippingOptions[i].name + " " + shippingOptions[i].price + "€";
            document.getElementById("shipping").appendChild(label);
            label.setAttribute("for", "shippingOptions" + [i]);
            console.log(label);
        }
    }


}