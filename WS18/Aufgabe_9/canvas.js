var A9;
(function (A9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 200;
            let y = Math.random() * 200;
        }
        drawSun(1020, 20, "#ffff00", "#FFD700");
        drawMountain(0, 300, "#000000", "#ffffff");
    }
    //SUN
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //MOUNTAIN
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1000, _y + 420);
        crc2.lineTo(_x + 1000, _y + 720);
        crc2.lineTo(_x - 1000, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawStar(_x, _y) {
        crc2.fillStyle = "#FF9000";
        crc2.strokeStyle = "#ff0000";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y + 10);
        crc2.lineTo(_x, _y - 20);
        crc2.lineTo(_x + 20, _y + 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y - 10);
        crc2.lineTo(_x + 20, _y - 10);
        crc2.lineTo(_x, _y + 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=canvas.js.map