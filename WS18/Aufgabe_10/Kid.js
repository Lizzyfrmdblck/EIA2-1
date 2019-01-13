var A10;
(function (A10) {
    class Kid {
        constructor() {
            this.x = 220;
            this.y = Math.random() * 250 + 400;
            this.dx = Math.random() * 3 + 2;
            this.dy = 1;
        }
        drawDown() {
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x - 5, this.y + 5);
            A10.crc2.lineTo(this.x + 20, this.y + 15);
            A10.crc2.lineTo(this.x + 17, this.y + 7);
            // crc2.lineTo(this.x - 2.5, this.y - 10);
            A10.crc2.fillStyle = "#ff2200";
            A10.crc2.closePath();
            A10.crc2.stroke();
            A10.crc2.fill();
            A10.crc2.beginPath();
            A10.crc2.fillStyle = this.fill;
            A10.crc2.arc(this.x + 5, this.y - 2.5, 5, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.stroke();
            A10.crc2.fill();
        }
        drawUp() {
            //            crc2.beginPath();
            //            crc2.moveTo(this.x + 400, this.y + 100);
            //            crc2.lineTo(this.x - 5 + 400, this.y + 5 + 100);
            //            crc2.lineTo(this.x + 20 + 400, this.y + 15 + 100);
            //            crc2.lineTo(this.x + 17 + 400, this.y + 7 + 100);
            //            // crc2.lineTo(this.x - 2.5, this.y - 10);
            //            crc2.fillStyle = "#ff2200";
            //
            //            crc2.closePath();
            //            crc2.stroke();
            //            crc2.fill();
            //
            //            crc2.beginPath();
            //            crc2.fillStyle = this.fill;
            //            crc2.arc(this.x + 5 + 400, this.y - 2.5 + 100, 5, 0, 2 * Math.PI);
            //            crc2.closePath();
            //            crc2.stroke();
            //            crc2.fill();
            //            SLEDGE
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.rect(this.x + 400, this.y + 100, 10, 20);
            A10.crc2.closePath();
            A10.crc2.fillStyle = "#ff2200";
            A10.crc2.fill();
            A10.crc2.lineWidth = 1;
            A10.crc2.strokeStyle = "black";
            A10.crc2.stroke();
            //DUDE
            A10.crc2.beginPath();
            A10.crc2.fillStyle = "#DEB887";
            A10.crc2.arc(this.x + 5 + 400, this.y - 2.5 + 100, 5, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.stroke();
            A10.crc2.fill();
        }
        moveDown() {
            this.x += this.dx;
            this.y += this.dy;
        }
        moveUp() {
            this.x -= this.dx;
            this.y -= this.dy;
        }
    }
    A10.Kid = Kid;
})(A10 || (A10 = {}));
//# sourceMappingURL=Kid.js.map