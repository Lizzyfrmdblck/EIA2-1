declare namespace Aufgabe8_Inheritance {
    class HoneyBee extends SuperBees {
        xTarget: number;
        yTarget: number;
        speed: number;
        constructor(_x: number, _y: number);
        setStartPosition(): void;
        setRandomTargetPosition(): void;
        move(): void;
        drawBee(): void;
    }
}
