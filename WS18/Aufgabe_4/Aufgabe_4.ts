namespace WBK {
    window.addEventListener("load", init);
    
    interface Product {
        name: string;
        price: number;
    }

    let trees: Product[] = [{name: "Tanne", price: 10}, {name: "Fichte", price: 15}];
    
    let balls: Product[] = [{name: "Rote Kugeln", price: 1}, {name: "Silberne Kugeln", price: 2}, {name: "Goldene Kugeln", price: 3} ];
    
    let lametta: Product[] = [{name: "Blaues Lametta", price: 1}, {name: "Silbernes Lametta", price: 2}, {name: "Goldenes Lametta", price: 3} ];
    
    function init(): void {

        generateContent();

    }

    function generateContent(): void {
        
        
        
    }

}