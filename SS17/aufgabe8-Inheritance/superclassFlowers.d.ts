declare namespace Aufgabe8_Inheritance {
    class SuperFlowers {
        xRandom: number;
        yRandom: number;
        centerSize: number;
        leaveSize: number;
        centerColor: string;
        leaveColor: string;
        typ: number;
        constructor();
        setRandomPositionRight(): void;
        setRandomCenterSize(): void;
        setRandomLeaveSize(): void;
        setRandomLeaveColor(): void;
        setRandomCenterColor(): void;
        draw(): void;
    }
}
