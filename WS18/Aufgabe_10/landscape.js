var A10;
(function (A10) {
    //SUN
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        A10.crc2.beginPath();
        A10.crc2.fillStyle = _fillColor;
        A10.crc2.arc(_x, _y, 180, 0, 2 * Math.PI);
        A10.crc2.closePath();
        A10.crc2.stroke();
        A10.crc2.fill();
    }
    A10.drawSun = drawSun;
    //HILL
    function drawHill(_x, _y, _strokeColor, _fillColor) {
        A10.crc2.beginPath();
        A10.crc2.fillStyle = _fillColor;
        A10.crc2.strokeStyle = _strokeColor;
        A10.crc2.moveTo(_x, _y);
        A10.crc2.lineTo(_x + 1500, _y + 420);
        A10.crc2.lineTo(_x + 1000, _y + 720);
        A10.crc2.lineTo(_x - 1000, _y + 200);
        A10.crc2.closePath();
        A10.crc2.fill();
    }
    A10.drawHill = drawHill;
    function drawTree(_x, _y, _w, _h, _fill1, _fill2) {
        A10.crc2.fillStyle = _fill1;
        A10.crc2.beginPath();
        A10.crc2.rect(_x, _y, _w, _h);
        A10.crc2.fill();
        A10.crc2.beginPath();
        A10.crc2.fillStyle = "green";
        A10.crc2.strokeStyle = "green";
        A10.crc2.moveTo(_x + 5, _y + 7.5);
        A10.crc2.lineTo(_x - 10, _y + 5);
        A10.crc2.lineTo(_x + 5, _y - 25);
        A10.crc2.lineTo(_x + 20, _y + 5);
        A10.crc2.closePath();
        A10.crc2.fill();
        A10.crc2.stroke();
    }
    A10.drawTree = drawTree;
    //CLOUD
    function drawCloud(_x, _y, _size, _strokeColor, _fillColor) {
        A10.crc2.beginPath();
        A10.crc2.fillStyle = _fillColor;
        A10.crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        A10.crc2.closePath();
        //crc2.stroke();
        A10.crc2.fill();
    }
    A10.drawCloud = drawCloud;
})(A10 || (A10 = {}));
//# sourceMappingURL=landscape.js.map