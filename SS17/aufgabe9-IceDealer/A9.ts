namespace IceDealer {
    let allFieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
    let flavors: string[] = ["Zitrone ", "Erbeere ", "Pistazie "];
    let inputsArray: HTMLInputElement[] = [];
    let fieldset: HTMLFieldSetElement;

    window.addEventListener("load", init);
    console.log("load");

    function init(): void {

        fieldset = document.getElementsByTagName("fieldset")[1];

        createFlavors();
    }

    function createFlavors(): void {

        for (let i: number = 0; i < flavors.length; i++) {

            createInput(flavors[i]);
        }
    }

    function createInput(_flavor: string): void {

        let labelTag: HTMLLabelElement = document.createElement("label");       
        let inputTag: HTMLInputElement = document.createElement("input");

        labelTag.innerText = _flavor;
        labelTag.appendChild(inputTag);

        inputTag.type = "number";
        inputTag.id = "flavors";
        inputTag.placeholder = "0";
        inputTag.min = "0";
        inputTag.max = "10";
        fieldset.appendChild(labelTag);

    }
}