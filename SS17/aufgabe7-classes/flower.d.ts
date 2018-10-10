declare namespace Aufgabe7_Classes {
    class Flower {
        xRandom: number;
        yRandom: number;
        centerSize: number;
        leaveSize: number;
        centerColor: string;
        leaveColor: string;
        typ: number;
        constructor();
        drawFlower(): void;
        drawType(): void;
        drawOnSide(): void;
        setRandomPositionLeft(): void;
        setRandomPositionRight(): void;
        setRandomCenterSize(): void;
        setRandomLeaveSize(): void;
        setRandomLeaveColor(): void;
        setRandomCenterColor(): void;
    }
}
