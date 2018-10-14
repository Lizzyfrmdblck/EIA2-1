var Aufgabe7_Classes;
(function (Aufgabe7_Classes) {
    class Flower {
        constructor() {
            this.drawType();
            this.setRandomPositionLeft();
            this.setRandomPositionRight();
            this.setRandomCenterSize();
            this.setRandomLeaveSize();
            this.setRandomCenterColor();
            this.setRandomLeaveColor();
        }
        drawFlower() {
            //LEAVES
            Aufgabe7_Classes.crc2.fillStyle = this.leaveColor;
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.xRandom, this.yRandom - 5, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.xRandom - 5, this.yRandom, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.xRandom + 5, this.yRandom, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.xRandom, this.yRandom + 5, 7, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fill();
            //CENTER
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.arc(this.xRandom, this.yRandom, this.centerSize, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.fillStyle = this.centerColor;
            Aufgabe7_Classes.crc2.fill();
        }
        drawType() {
            if (this.typ == 1) {
                this.drawFlower();
            }
            else {
                this.drawFlower();
            }
        }
        drawOnSide() {
            if (this.typ == 1) {
                this.drawFlower();
            }
            else {
                this.drawFlower();
            }
        }
        setRandomPositionLeft() {
            this.xRandom = (Math.random() * (215 - 15) + 15);
            this.yRandom = (Math.random() * (375 - 200) + 200);
        }
        setRandomPositionRight() {
            this.xRandom = (Math.random() * (565 - 385) + 385);
            this.yRandom = (Math.random() * (375 - 200) + 200);
        }
        setRandomCenterSize() {
            this.centerSize = (Math.random() * (7.5 - 4) + 4);
        }
        setRandomLeaveSize() {
            this.leaveSize = (Math.random() * (8 - 4) + 4);
        }
        setRandomLeaveColor() {
            let colorBucket = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            let colorBucket1 = ["#81BEF7", "#F781BE", "#DF0101", "#81F7D8", "#F5DA81"];
            this.leaveColor = colorBucket[Math.floor(Math.random() * colorBucket.length)];
            //            let randomColor1: string = colorBucket1[Math.floor(Math.random() * colorBucket1.length)];
        }
        setRandomCenterColor() {
            let centerColors = ["#b879fc", "#30e3f4", "#f4f130"];
            this.centerColor = centerColors[Math.floor(Math.random() * centerColors.length)];
        }
    }
    Aufgabe7_Classes.Flower = Flower;
})(Aufgabe7_Classes || (Aufgabe7_Classes = {}));
//# sourceMappingURL=flower.js.map