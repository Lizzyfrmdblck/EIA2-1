namespace A7_2 {

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
                { name: "Lametta rot", price: 4 },
                { name: "Lametta silber", price: 6 },
                { name: "Lametta gold", price: 8 }
            ],

            "Kerzen": [
                { name: "Wachskerzen", price: 5 },
                { name: "Plastikkerzen", price: 7 }
            ],

            "Versand": [
                { name: "Hermes", price: 3 },
                { name: "DHL", price: 5 },
                { name: "UPS", price: 7 }
            ]

        };
}