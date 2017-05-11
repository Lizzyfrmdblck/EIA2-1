var Aufgabe7_Classes;
(function (Aufgabe7_Classes) {
    var Flower = (function () {
        function Flower(_x, _y, _size, _color, _color2) {
            this.x = _x;
            this.y = _y;
            this.centerSize = _size;
            this.centerColor = _color;
            this.leaveColor = _color2;
        }
        Flower.prototype.drawFlower = function () {
            //LEAVES
            Aufgabe7_Classes.crc2.fillStyle = this.leaveColor;
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.x, this.y - 5, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.x - 5, this.y, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.x + 5, this.y, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.x, this.y + 5, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            //CENTER
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.x, this.y, this.centerSize, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fillStyle = this.centerColor;
            Aufgabe7_Classes.crc2.fill();
        };
        Flower.prototype.draw = function () {
            if (this.typ == 1) {
                this.drawFlower();
            }
            else {
                this.drawFlower();
            }
        };
        return Flower;
    }());
    Aufgabe7_Classes.Flower = Flower;
})(Aufgabe7_Classes || (Aufgabe7_Classes = {}));
//# sourceMappingURL=flower.js.map