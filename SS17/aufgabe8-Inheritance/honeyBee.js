var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class HoneyBee extends Aufgabe8_Inheritance.SuperBees {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.05;
            this.x = _x;
            this.y = _y;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }
        setStartPosition() {
            this.x = 140;
            this.y = 275;
        }
        setRandomTargetPosition() {
            let targetFlower = Math.round(Math.random() * (Aufgabe8_Inheritance.fixedFlowers.length - 1));
            this.xTarget = Aufgabe8_Inheritance.fixedFlowers[targetFlower].xRandom;
            this.yTarget = Aufgabe8_Inheritance.fixedFlowers[targetFlower].yRandom;
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        drawBee() {
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
        }
    }
    Aufgabe8_Inheritance.HoneyBee = HoneyBee;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=honeyBee.js.map