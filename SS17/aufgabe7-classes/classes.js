var Aufgabe7_Classes;
(function (Aufgabe7_Classes) {
    class Bee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomstyle();
        }
        update() {
            this.drawBee();
            this.move();
        }
        drawBee() {
            Aufgabe7_Classes.crc2.beginPath();
            Aufgabe7_Classes.crc2.fillStyle = this.color;
            Aufgabe7_Classes.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            Aufgabe7_Classes.crc2.closePath();
            Aufgabe7_Classes.crc2.fill();
            //Optik der Bienen wird bei Gelegenheit noch �berarbeitet..
        }
        move() {
            this.x += (Math.random() * 6 - 3) - 1;
            this.y += Math.random() * 6 - 3;
        }
        setRandomstyle() {
            let colors = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            let randomSize = (Math.random() * (8 - 4) + 4);
            this.size = randomSize;
            this.color = randomColor;
        }
    }
    Aufgabe7_Classes.Bee = Bee;
})(Aufgabe7_Classes || (Aufgabe7_Classes = {}));
//# sourceMappingURL=classes.js.map