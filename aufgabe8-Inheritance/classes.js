var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    var Bee = (function () {
        function Bee(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomstyle();
        }
        Bee.prototype.update = function () {
            this.drawBee();
            this.move();
        };
        Bee.prototype.drawBee = function () {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = this.color;
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.fill();
            //Optik der Bienen wird bei Gelegenheit noch �berarbeitet..
        };
        Bee.prototype.move = function () {
            this.x += (Math.random() * 6 - 3) - 1;
            this.y += Math.random() * 6 - 3;
        };
        Bee.prototype.setRandomstyle = function () {
            var colors = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            var randomSize = (Math.random() * (8 - 4) + 4);
            this.size = randomSize;
            this.color = randomColor;
        };
        return Bee;
    }());
    Aufgabe8_Inheritance.Bee = Bee;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=classes.js.map