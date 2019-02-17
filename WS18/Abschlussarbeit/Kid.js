var EIA2;
(function (EIA2) {
    class Kid extends EIA2.Object {
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
            }
            else {
                this.drawUp();
            }
        }
        moveDown() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 720 || this.x > 1080) {
                this.state = false;
            }
        }
        moveUp() {
            if (this.x > 220) {
                this.x -= this.dx;
                this.y -= this.dy;
            }
            else {
                this.state = true;
            }
        }
        drawDown() {
            this.moveDown();
            EIA2.crc2.beginPath();
            EIA2.crc2.moveTo(this.x, this.y);
            EIA2.crc2.lineTo(this.x - 5, this.y + 5);
            EIA2.crc2.lineTo(this.x + 20, this.y + 15);
            EIA2.crc2.lineTo(this.x + 17, this.y + 7);
            // crc2.lineTo(this.x - 2.5, this.y - 10);
            EIA2.crc2.fillStyle = "#ff2200";
            EIA2.crc2.closePath();
            EIA2.crc2.stroke();
            EIA2.crc2.fill();
            EIA2.crc2.beginPath();
            EIA2.crc2.fillStyle = this.fill;
            EIA2.crc2.arc(this.x + 5, this.y - 2.5, 5, 0, 2 * Math.PI);
            EIA2.crc2.closePath();
            EIA2.crc2.stroke();
            EIA2.crc2.fill();
        }
        drawUp() {
            this.moveUp();
            //            SLEDGE
            EIA2.crc2.beginPath();
            EIA2.crc2.moveTo(this.x, this.y);
            EIA2.crc2.rect(this.x, this.y, 10, 20);
            EIA2.crc2.closePath();
            EIA2.crc2.fillStyle = "#ff2200";
            EIA2.crc2.fill();
            EIA2.crc2.lineWidth = 1;
            EIA2.crc2.strokeStyle = "black";
            EIA2.crc2.stroke();
            //DUDE
            EIA2.crc2.beginPath();
            EIA2.crc2.fillStyle = "#DEB887";
            EIA2.crc2.arc(this.x + 5, this.y - 2.5, 5, 0, 2 * Math.PI);
            EIA2.crc2.closePath();
            EIA2.crc2.stroke();
            EIA2.crc2.fill();
        }
    }
    EIA2.Kid = Kid;
})(EIA2 || (EIA2 = {}));
//# sourceMappingURL=Kid.js.map