var EIA2;
(function (EIA2) {
    //SUN
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        EIA2.crc2.beginPath();
        EIA2.crc2.fillStyle = _fillColor;
        EIA2.crc2.arc(_x, _y, 180, 0, 2 * Math.PI);
        EIA2.crc2.closePath();
        EIA2.crc2.stroke();
        EIA2.crc2.fill();
    }
    EIA2.drawSun = drawSun;
    //HILL
    function drawHill(_x, _y, _strokeColor, _fillColor) {
        EIA2.crc2.beginPath();
        EIA2.crc2.fillStyle = _fillColor;
        EIA2.crc2.strokeStyle = _strokeColor;
        EIA2.crc2.moveTo(_x, _y);
        EIA2.crc2.lineTo(_x + 1500, _y + 420);
        EIA2.crc2.lineTo(_x + 1000, _y + 720);
        EIA2.crc2.lineTo(_x - 1000, _y + 200);
        EIA2.crc2.closePath();
        EIA2.crc2.fill();
    }
    EIA2.drawHill = drawHill;
    function drawTree(_x, _y, _w, _h, _fill1, _fill2) {
        EIA2.crc2.fillStyle = _fill1;
        EIA2.crc2.beginPath();
        EIA2.crc2.rect(_x, _y, _w, _h);
        EIA2.crc2.fill();
        EIA2.crc2.beginPath();
        EIA2.crc2.fillStyle = "#00844d";
        EIA2.crc2.strokeStyle = "#00844d";
        EIA2.crc2.moveTo(_x + 5, _y + 7.5);
        EIA2.crc2.lineTo(_x - 10, _y + 5);
        EIA2.crc2.lineTo(_x + 5, _y - 25);
        EIA2.crc2.lineTo(_x + 20, _y + 5);
        EIA2.crc2.closePath();
        EIA2.crc2.fill();
        EIA2.crc2.stroke();
    }
    EIA2.drawTree = drawTree;
    //CLOUD
    function drawCloud(_x, _y, _size, _strokeColor, _fillColor) {
        EIA2.crc2.beginPath();
        EIA2.crc2.fillStyle = _fillColor;
        EIA2.crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        EIA2.crc2.closePath();
        //crc2.stroke();
        EIA2.crc2.fill();
    }
    EIA2.drawCloud = drawCloud;
})(EIA2 || (EIA2 = {}));
//# sourceMappingURL=landscape.js.map