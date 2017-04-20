//namespace_load_canvas
var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    var crc2;
    // canvasInitialize_
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //SKY
        var colorGradient = crc2.createLinearGradient(50, 140, 50, 10);
        colorGradient.addColorStop(0, "#B0E2FF");
        colorGradient.addColorStop(1, "#1874CD");
        crc2.fillStyle = colorGradient;
        crc2.fillRect(0, -225, canvas.width, canvas.height);
        //MOUNTAIN
        drawmountain(50, 100, 90, "#000000", "#7F7F7F");
        drawmountain(150, 150, 50, "#000000", "#878787");
        drawmountain(620, 150, 200, "#000000", "#9E9E9E");
        drawmountain(500, 200, 175, "#000000", "#ABABAB");
        //SUN
        drawsun(0, 0, "#ffff00", "#FFD700");
        //FIELD        
        crc2.fillStyle = "#68b300";
        crc2.fillRect(0, 175, canvas.width, canvas.height);
        //STREET
        drawstreet(225, 400, "#000000", "#404040");
        //STRIPES
        drawstripes(300, 390, 15, 360, "#ffffff", "#ffffff");
        drawstripes(300, 340, 12, 315, "#ffffff", "#ffffff");
        drawstripes(300, 300, 9, 280, "#ffffff", "#ffffff");
        drawstripes(300, 265, 7, 250, "#ffffff", "#ffffff");
        drawstripes(300, 235, 5, 220, "#ffffff", "#ffffff");
        drawstripes(300, 210, 3, 200, "#ffffff", "#ffffff");
        drawstripes(300, 190, 2, 180, "#ffffff", "#ffffff");
        //CLOUD3
        drawCloud(180, 75, 10, "#000000", "#ffffff");
        drawCloud(170, 70, 10, "#000000", "#ffffff");
        drawCloud(175, 60, 10, "#000000", "#ffffff");
        drawCloud(185, 60, 10, "#000000", "#ffffff");
        drawCloud(190, 68, 10, "#000000", "#ffffff");
        //CLOUD2
        drawCloud(420, 52, 10, "#000000", "#ffffff");
        drawCloud(410, 48, 9, "#000000", "#ffffff");
        drawCloud(415, 39, 8, "#000000", "#ffffff");
        drawCloud(425, 42, 8, "#000000", "#ffffff");
        drawCloud(430, 48, 10, "#000000", "#ffffff");
        //ClOUD1
        drawCloud(270, 32, 10, "#000000", "#ffffff");
        drawCloud(260, 28, 9, "#000000", "#ffffff");
        drawCloud(265, 19, 8, "#000000", "#ffffff");
        drawCloud(276, 22, 8, "#000000", "#ffffff");
        drawCloud(270, 28, 10, "#000000", "#ffffff");
        //BIRDS
        drawBird(320, 50, 338, 58, "#000000");
        drawBird(305, 65, 323, 73, "#000000");
        //RANDOMFLOWERS
        //        function getRandomArbitrary(min: number = 1, max: number = 250) {
        //        let random: number = Math.floor(Math.random() * (max - min)) + min;
        //        console.log(random);
        //            let randomCard: number = Math.floor((Math.random() * 3));
        //        drawRandomFlower(randomCard, 100);
        //        }
    }
    //MOUNTAIN
    function drawmountain(_x, _y, _z, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - _z, _y + _z);
        crc2.lineTo(_x, _y - _z);
        crc2.lineTo(_x + _z, _y + _z);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //SUN
    function drawsun(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(300, 175, 80, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //STREET
    function drawstreet(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(295, 176);
        crc2.lineTo(305, 176);
        crc2.lineTo(375, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //STRIPES
    function drawstripes(_x, _y, _width, _length, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.lineWidth = _width;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(300, _length);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //CLOUD
    function drawCloud(_x, _y, _size, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //BIRD
    function drawBird(_x1, _y1, _x2, _y2, _strokeColor) {
        crc2.beginPath();
        crc2.arc(_x1, _y1, 10, 4, 0 * Math.PI, false);
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x2, _y2, 10, 4, 0 * Math.PI, false);
        crc2.scale(1, 1);
        crc2.stroke();
        crc2.closePath();
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=blumenwiese.js.map