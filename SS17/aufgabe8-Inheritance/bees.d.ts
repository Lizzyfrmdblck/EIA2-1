declare namespace Aufgabe8_Inheritance {
    class Bees extends SuperBees {
        x: number;
        y: number;
        size: number;
        color: string;
        constructor(_x: number, _y: number);
        drawBee(): void;
        move(): void;
    }
}
