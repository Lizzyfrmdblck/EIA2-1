var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    var LandscapeTest = (function () {
        function LandscapeTest() {
            //SKY
            var colorGradient = Aufgabe8_Inheritance.crc2.createLinearGradient(50, 140, 50, 10);
            colorGradient.addColorStop(0, "#B0E2FF");
            colorGradient.addColorStop(1, "#1874CD");
            Aufgabe8_Inheritance.crc2.fillStyle = colorGradient;
            Aufgabe8_Inheritance.crc2.fillRect(0, -225, Aufgabe8_Inheritance.canvas.width, Aufgabe8_Inheritance.canvas.height);
            //MOUNTAIN
            this.drawMountain(50, 100, 90, "#000000", "#7F7F7F");
            this.drawMountain(150, 150, 50, "#000000", "#878787");
            this.drawMountain(620, 150, 200, "#000000", "#9E9E9E");
            this.drawMountain(500, 200, 175, "#000000", "#ABABAB");
            //SUN
            this.drawSun(0, 0, "#ffff00", "#FFD700");
            //FIELD        
            Aufgabe8_Inheritance.crc2.fillStyle = "#68b300";
            Aufgabe8_Inheritance.crc2.fillRect(0, 175, Aufgabe8_Inheritance.canvas.width, Aufgabe8_Inheritance.canvas.height);
            //BIENENSTOCK        
            Aufgabe8_Inheritance.crc2.fillStyle = "brown";
            Aufgabe8_Inheritance.crc2.fillRect(225, 180, 40, 40);
            Aufgabe8_Inheritance.crc2.fillStyle = "black";
            Aufgabe8_Inheritance.crc2.fillRect(240, 200, 10, 10);
            //STREET
            this.drawStreet(225, 400, "#000000", "#404040");
            //STRIPES
            this.drawStripes(300, 390, 15, 360, "#ffffff", "#ffffff");
            this.drawStripes(300, 340, 12, 315, "#ffffff", "#ffffff");
            this.drawStripes(300, 300, 9, 280, "#ffffff", "#ffffff");
            this.drawStripes(300, 265, 7, 250, "#ffffff", "#ffffff");
            this.drawStripes(300, 235, 5, 220, "#ffffff", "#ffffff");
            this.drawStripes(300, 210, 3, 200, "#ffffff", "#ffffff");
            this.drawStripes(300, 190, 2, 180, "#ffffff", "#ffffff");
            //CLOUD3
            this.drawCloud(180, 75, 10, "#000000", "#ffffff");
            this.drawCloud(170, 70, 10, "#000000", "#ffffff");
            this.drawCloud(175, 60, 10, "#000000", "#ffffff");
            this.drawCloud(185, 60, 10, "#000000", "#ffffff");
            this.drawCloud(190, 68, 10, "#000000", "#ffffff");
            //CLOUD2
            this.drawCloud(420, 52, 10, "#000000", "#ffffff");
            this.drawCloud(410, 48, 9, "#000000", "#ffffff");
            this.drawCloud(415, 39, 8, "#000000", "#ffffff");
            this.drawCloud(425, 42, 8, "#000000", "#ffffff");
            this.drawCloud(430, 48, 10, "#000000", "#ffffff");
            //ClOUD1
            this.drawCloud(270, 32, 10, "#000000", "#ffffff");
            this.drawCloud(260, 28, 9, "#000000", "#ffffff");
            this.drawCloud(265, 19, 8, "#000000", "#ffffff");
            this.drawCloud(276, 22, 8, "#000000", "#ffffff");
            this.drawCloud(270, 28, 10, "#000000", "#ffffff");
            //BIRDS
            this.drawBird(320, 50, 338, 58, "#000000");
            this.drawBird(305, 65, 323, 73, "#000000");
        }
        //MOUNTAIN
        LandscapeTest.prototype.drawMountain = function (_x, _y, _z, _strokeColor, _fillColor) {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = _fillColor;
            Aufgabe8_Inheritance.crc2.strokeStyle = _strokeColor;
            Aufgabe8_Inheritance.crc2.moveTo(_x - _z, _y + _z);
            Aufgabe8_Inheritance.crc2.lineTo(_x, _y - _z);
            Aufgabe8_Inheritance.crc2.lineTo(_x + _z, _y + _z);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.stroke();
        };
        //SUN
        LandscapeTest.prototype.drawSun = function (_x, _y, _strokeColor, _fillColor) {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = _fillColor;
            Aufgabe8_Inheritance.crc2.arc(300, 175, 80, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.stroke();
            Aufgabe8_Inheritance.crc2.fill();
        };
        //STREET
        LandscapeTest.prototype.drawStreet = function (_x, _y, _strokeColor, _fillColor) {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = _fillColor;
            Aufgabe8_Inheritance.crc2.strokeStyle = _strokeColor;
            Aufgabe8_Inheritance.crc2.moveTo(_x, _y);
            Aufgabe8_Inheritance.crc2.lineTo(295, 176);
            Aufgabe8_Inheritance.crc2.lineTo(305, 176);
            Aufgabe8_Inheritance.crc2.lineTo(375, 400);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.stroke();
        };
        //STRIPES
        LandscapeTest.prototype.drawStripes = function (_x, _y, _width, _length, _strokeColor, _fillColor) {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = _fillColor;
            Aufgabe8_Inheritance.crc2.lineWidth = _width;
            Aufgabe8_Inheritance.crc2.strokeStyle = _strokeColor;
            Aufgabe8_Inheritance.crc2.moveTo(_x, _y);
            Aufgabe8_Inheritance.crc2.lineTo(300, _length);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.stroke();
        };
        //CLOUD
        LandscapeTest.prototype.drawCloud = function (_x, _y, _size, _strokeColor, _fillColor) {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = _fillColor;
            Aufgabe8_Inheritance.crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.stroke();
            Aufgabe8_Inheritance.crc2.fill();
        };
        //BIRD
        LandscapeTest.prototype.drawBird = function (_x1, _y1, _x2, _y2, _strokeColor) {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(_x1, _y1, 10, 4, 0 * Math.PI, false);
            Aufgabe8_Inheritance.crc2.strokeStyle = _strokeColor;
            Aufgabe8_Inheritance.crc2.arc(_x2, _y2, 10, 4, 0 * Math.PI, false);
            Aufgabe8_Inheritance.crc2.scale(1, 1);
            Aufgabe8_Inheritance.crc2.stroke();
            Aufgabe8_Inheritance.crc2.closePath();
        };
        return LandscapeTest;
    }());
    Aufgabe8_Inheritance.LandscapeTest = LandscapeTest;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=landscape.js.map