declare namespace Aufgabe7_Classes {
    class Bee {
        x: number;
        y: number;
        size: number;
        color: string;
        constructor(_x: number, _y: number);
        update(): void;
        drawBee(): void;
        move(): void;
        setRandomstyle(): void;
    }
}
