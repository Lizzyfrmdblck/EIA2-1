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
            this.speed = 0.05;
            this.x = _x;
            this.y = _y;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }
        HoneyBee.prototype.setStartPosition = function () {
            this.x = 140;
            this.y = 275;
        };
        HoneyBee.prototype.setRandomTargetPosition = function () {
            var targetFlower = Math.round(Math.random() * (Aufgabe8_Inheritance.fixedFlowers.length - 1));
            this.xTarget = Aufgabe8_Inheritance.fixedFlowers[targetFlower].xRandom;
            this.yTarget = Aufgabe8_Inheritance.fixedFlowers[targetFlower].yRandom;
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
        HoneyBee.prototype.drawBee = function () {
            Aufgabe8_Inheritance.crc2.beginPath();
            //            crc2.fillStyle = this.color;
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fillStyle = "#000000";
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fillStyle = "#FFD700";
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.fill();
            //Optik der Bienen wird bei Gelegenheit noch �berarbeitet..
        };
        return HoneyBee;
    }(Aufgabe8_Inheritance.SuperBees));
    Aufgabe8_Inheritance.HoneyBee = HoneyBee;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=honeyBee.js.map