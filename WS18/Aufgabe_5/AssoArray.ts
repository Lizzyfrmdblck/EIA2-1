namespace WBK_2 {

    export interface Product {
        name: string;
        price: number;
    }

    export interface ProductKey {
        [key: string]: Product[];
    }

    export let products: ProductKey
        = {

            "Bäume": [
                { name: "Tanne", price: 20 },
                { name: "Nordmanntanne", price: 25 },
                { name: "Fichte", price: 15 }
            ],

            "Kugeln": [
                { name: "Rote Kugeln", price: 5 },
                { name: "Silberne Kugeln", price: 7 },
                { name: "Goldene Kugeln", price: 10 }
            ],

            "Lametta": [
                { name: "Lametta rot", price: 5 },
                { name: "Lametta silber", price: 7 },
                { name: "Lametta gold", price: 10 }
            ],

            "Kerzen": [
                { name: "Wachs", price: 5 },
                { name: "Plastik", price: 7 }
            ],

            "Versand": [
                { name: "Hermes", price: 3 },
                { name: "DHL", price: 5 },
                { name: "UPS", price: 7 }
            ]

        };
}