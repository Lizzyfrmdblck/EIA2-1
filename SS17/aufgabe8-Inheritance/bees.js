var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class Bees extends Aufgabe8_Inheritance.SuperBees {
        constructor(_x, _y) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        drawBee() {
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.fillStyle = this.color;
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.closePath();
            Aufgabe8_Inheritance.crc2.fill();
            //Optik der Bienen wird bei Gelegenheit noch �berarbeitet..
        }
        move() {
            this.x += (Math.random() * 6 - 3) - 1;
            this.y += Math.random() * 6 - 3;
        }
    }
    Aufgabe8_Inheritance.Bees = Bees;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
