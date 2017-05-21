var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    var HoneyBee = (function (_super) {
        __extends(HoneyBee, _super);
        function HoneyBee(_x, _y) {
            _super.call(this, _x, _y);
            this.x = _x;
            this.y = _y;
            this.setRandomTargetPosition();
        }
        HoneyBee.prototype.update = function () {
            this.drawBee();
            this.move();
        };
        HoneyBee.prototype.drawBee = function () {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = this.color;
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.fill();
            //Optik der Bienen wird bei Gelegenheit noch �berarbeitet..
        };
        HoneyBee.prototype.setRandomTargetPosition = function () {
            this.x = Math.random() * Aufgabe8_Inheritance.crc2.canvas.width;
            this.yTarget = Math.random() * Aufgabe8_Inheritance.crc2.canvas.height;
        };
        HoneyBee.prototype.move = function () {
            var xDiff = this.xTarget - this.x;
            var yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        };
        return HoneyBee;
    }(Aufgabe8_Inheritance.SuperBees));
    Aufgabe8_Inheritance.HoneyBee = HoneyBee;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=honeyBee.js.map