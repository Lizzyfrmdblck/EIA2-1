declare namespace Aufgabe8_Inheritance {
    class SuperBees {
        x: number;
        y: number;
        size: number;
        color: string;
        constructor(_x: number, _y: number);
        update(): void;
        drawBee(): void;
        move(): void;
        moveBackInCanvas(): void;
        setRandomstyle(): void;
    }
}
