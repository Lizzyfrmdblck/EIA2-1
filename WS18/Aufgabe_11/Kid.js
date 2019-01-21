var A11;
(function (A11) {
    class Kid extends A11.Object {
        constructor() {
            super();
            this.state = true;
            this.x = 220;
            this.y = Math.random() * 250 + 400;
            this.dx = Math.random() * 3 + 2;
            this.dy = 1;
            this.fill = "#DEB887";
        }
        draw() {
            if (this.state == true) {
                this.drawDown();
                console.log();
            }
            else {
                this.drawUp();
                console.log("hier auch?");
            }
        }
        moveDown() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 720 || this.x > 1080) {
                this.state = false;
                console.log("Down: " + this.state, "x" + this.x, "y" + this.y);
            }
        }
        moveUp() {
            if (this.x > 220) {
                this.x -= this.dx;
                this.y -= this.dy;
                //     this.state = false;
                console.log("UP: " + this.state, "x" + this.x, "y" + this.y);
            }
            else {
                this.state = true;
            }
        }
        drawDown() {
            this.moveDown();
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x - 5, this.y + 5);
            A11.crc2.lineTo(this.x + 20, this.y + 15);
            A11.crc2.lineTo(this.x + 17, this.y + 7);
            // crc2.lineTo(this.x - 2.5, this.y - 10);
            A11.crc2.fillStyle = "#ff2200";
            A11.crc2.closePath();
            A11.crc2.stroke();
            A11.crc2.fill();
            A11.crc2.beginPath();
            A11.crc2.fillStyle = this.fill;
            A11.crc2.arc(this.x + 5, this.y - 2.5, 5, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.stroke();
            A11.crc2.fill();
        }
        drawUp() {
            this.moveUp();
            //            SLEDGE
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.rect(this.x, this.y, 10, 20);
            A11.crc2.closePath();
            A11.crc2.fillStyle = "#ff2200";
            A11.crc2.fill();
            A11.crc2.lineWidth = 1;
            A11.crc2.strokeStyle = "black";
            A11.crc2.stroke();
            //DUDE
            A11.crc2.beginPath();
            A11.crc2.fillStyle = "#DEB887";
            A11.crc2.arc(this.x + 5, this.y - 2.5, 5, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.stroke();
            A11.crc2.fill();
        }
    }
    A11.Kid = Kid;
})(A11 || (A11 = {}));
//# sourceMappingURL=Kid.js.map