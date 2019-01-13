namespace A10 {

    //SUN
    export function drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //HILL
    export function drawHill(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1500, _y + 420);
        crc2.lineTo(_x + 1000, _y + 720);
        crc2.lineTo(_x - 1000, _y + 200);
        crc2.closePath();
        crc2.fill();
    }

    export function drawTree(_x: number, _y: number, _w: number, _h: number, _fill1: string, _fill2: string): void {
        crc2.fillStyle = _fill1;
        crc2.beginPath();
        crc2.rect(_x, _y, _w, _h);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.moveTo(_x + 5, _y + 7.5);
        crc2.lineTo(_x - 10, _y + 5);
        crc2.lineTo(_x + 5, _y - 25);
        crc2.lineTo(_x + 20, _y + 5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    //CLOUD
    export function drawCloud(_x: number, _y: number, _size: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
    }
}