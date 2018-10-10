var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class Flower extends Aufgabe8_Inheritance.SuperFlowers {
        constructor() {
            super();
            this.setRandomCenterSize();
            this.draw();
        }
        draw() {
            //LEAVES
            Aufgabe8_Inheritance.crc2.fillStyle = this.leaveColor;
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom - 5, 3, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom - 5, this.yRandom, 3, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom + 5, this.yRandom, 3, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom + 5, 3, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            //CENTER
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom, this.centerSize, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fillStyle = this.centerColor;
            Aufgabe8_Inheritance.crc2.fill();
        }
        setRandomCenterSize() {
            this.centerSize = (Math.random() * (5.5 - 2) + 2);
        }
    }
    Aufgabe8_Inheritance.Flower = Flower;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
