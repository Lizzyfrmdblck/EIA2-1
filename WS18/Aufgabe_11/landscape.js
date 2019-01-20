var A11;
(function (A11) {
    //SUN
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        A11.crc2.beginPath();
        A11.crc2.fillStyle = _fillColor;
        A11.crc2.arc(_x, _y, 180, 0, 2 * Math.PI);
        A11.crc2.closePath();
        A11.crc2.stroke();
        A11.crc2.fill();
    }
    A11.drawSun = drawSun;
    //HILL
    function drawHill(_x, _y, _strokeColor, _fillColor) {
        A11.crc2.beginPath();
        A11.crc2.fillStyle = _fillColor;
        A11.crc2.strokeStyle = _strokeColor;
        A11.crc2.moveTo(_x, _y);
        A11.crc2.lineTo(_x + 1500, _y + 420);
        A11.crc2.lineTo(_x + 1000, _y + 720);
        A11.crc2.lineTo(_x - 1000, _y + 200);
        A11.crc2.closePath();
        A11.crc2.fill();
    }
    A11.drawHill = drawHill;
    function drawTree(_x, _y, _w, _h, _fill1, _fill2) {
        A11.crc2.fillStyle = _fill1;
        A11.crc2.beginPath();
        A11.crc2.rect(_x, _y, _w, _h);
        A11.crc2.fill();
        A11.crc2.beginPath();
        A11.crc2.fillStyle = "green";
        A11.crc2.strokeStyle = "green";
        A11.crc2.moveTo(_x + 5, _y + 7.5);
        A11.crc2.lineTo(_x - 10, _y + 5);
        A11.crc2.lineTo(_x + 5, _y - 25);
        A11.crc2.lineTo(_x + 20, _y + 5);
        A11.crc2.closePath();
        A11.crc2.fill();
        A11.crc2.stroke();
    }
    A11.drawTree = drawTree;
    //CLOUD
    function drawCloud(_x, _y, _size, _strokeColor, _fillColor) {
        A11.crc2.beginPath();
        A11.crc2.fillStyle = _fillColor;
        A11.crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        A11.crc2.closePath();
        //crc2.stroke();
        A11.crc2.fill();
    }
    A11.drawCloud = drawCloud;
})(A11 || (A11 = {}));
//# sourceMappingURL=landscape.js.map