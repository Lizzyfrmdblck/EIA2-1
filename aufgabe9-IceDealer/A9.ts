namespace IceDealer {
    let fieldset: HTMLFieldSetElement;
    let flavors: string[] = ["Zitrone", "Erbeere", "Pistazie"];
    
    window.addEventListener("load", init);
    
    function init():  void {
        createFlavors();
    }
    
    function createFlavors(): void {
        
        for(let i: number = 0; i > flavors.length; i++) {
                createInput(flavors[i]);
        }
        
    function createInput(): void {
                    
        }
    }
}