var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    var Flower1 = (function (_super) {
        __extends(Flower1, _super);
        function Flower1() {
            _super.call(this);
            this.draw();
        }
        Flower1.prototype.draw = function () {
            //LEAVES
            Aufgabe8_Inheritance.crc2.fillStyle = this.leaveColor;
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom - 5, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom - 5, this.yRandom, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom + 5, this.yRandom, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom + 5, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            //CENTER
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom, this.centerSize, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fillStyle = this.centerColor;
            Aufgabe8_Inheritance.crc2.fill();
        };
        return Flower1;
    }(Aufgabe8_Inheritance.SuperFlowers));
    Aufgabe8_Inheritance.Flower1 = Flower1;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=flower1.js.map