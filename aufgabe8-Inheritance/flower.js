var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    var Flower = (function () {
        function Flower() {
            this.drawType();
            this.setRandomPositionLeft();
            this.setRandomPositionRight();
            this.setRandomCenterSize();
            this.setRandomLeaveSize();
            this.setRandomCenterColor();
            this.setRandomLeaveColor();
        }
        Flower.prototype.drawFlower = function () {
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
        Flower.prototype.drawType = function () {
            if (this.typ == 1) {
                this.drawFlower();
            }
            else {
                this.drawFlower();
            }
        };
        Flower.prototype.drawOnSide = function () {
            if (this.typ == 1) {
                this.drawFlower();
            }
            else {
                this.drawFlower();
            }
        };
        Flower.prototype.setRandomPositionLeft = function () {
            this.xRandom = (Math.random() * (215 - 15) + 15);
            this.yRandom = (Math.random() * (375 - 200) + 200);
        };
        Flower.prototype.setRandomPositionRight = function () {
            this.xRandom = (Math.random() * (565 - 385) + 385);
            this.yRandom = (Math.random() * (375 - 200) + 200);
        };
        Flower.prototype.setRandomCenterSize = function () {
            this.centerSize = (Math.random() * (7.5 - 4) + 4);
        };
        Flower.prototype.setRandomLeaveSize = function () {
            this.leaveSize = (Math.random() * (8 - 4) + 4);
        };
        Flower.prototype.setRandomLeaveColor = function () {
            var colorBucket = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            var colorBucket1 = ["#81BEF7", "#F781BE", "#DF0101", "#81F7D8", "#F5DA81"];
            this.leaveColor = colorBucket[Math.floor(Math.random() * colorBucket.length)];
            //            let randomColor1: string = colorBucket1[Math.floor(Math.random() * colorBucket1.length)];
        };
        Flower.prototype.setRandomCenterColor = function () {
            var centerColors = ["#b879fc", "#30e3f4", "#f4f130"];
            this.centerColor = centerColors[Math.floor(Math.random() * centerColors.length)];
        };
        return Flower;
    }());
    Aufgabe8_Inheritance.Flower = Flower;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=flower.js.map