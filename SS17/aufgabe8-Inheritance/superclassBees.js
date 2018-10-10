var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class SuperBees {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomstyle();
        }
        update() {
            this.drawBee();
            this.move();
            this.moveBackInCanvas();
        }
        drawBee() {
            //hi
        }
        move() {
            this.x += (Math.random() * 6 - 3) - 1;
            this.y += Math.random() * 6 - 3;
        }
        moveBackInCanvas() {
            if (this.x < 0) {
                this.x = 600;
            }
            if (this.x > 600) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = 400;
            }
            if (this.y > 400) {
                this.y = 0;
            }
        }
        setRandomstyle() {
            let colors = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            let randomSize = (Math.random() * (8 - 4) + 4);
            this.size = randomSize;
            this.color = randomColor;
        }
    }
    Aufgabe8_Inheritance.SuperBees = SuperBees;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
