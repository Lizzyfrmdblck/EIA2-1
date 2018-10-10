declare namespace Aufgabe7_Classes {
    class Landscape {
        constructor();
        drawMountain(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void;
        drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void;
        drawStreet(_x: number, _y: number, _strokeColor: string, _fillColor: string): void;
        drawStripes(_x: number, _y: number, _width: number, _length: number, _strokeColor: string, _fillColor: string): void;
        drawCloud(_x: number, _y: number, _size: number, _strokeColor: string, _fillColor: string): void;
        drawBird(_x1: number, _y1: number, _x2: number, _y2: number, _strokeColor: string): void;
    }
}
