var A10;
(function (A10) {
    class Snow {
        constructor() {
            this.dx = 0.5;
            this.dy = Math.random() * (2) + 1;
            this.size = Math.random() * 1.5 + 2.5;
        }
        draw() {
            //    console.log("draw");
            A10.crc2.beginPath();
            A10.crc2.fillStyle = this.fill;
            A10.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            A10.crc2.closePath();
            //crc2.stroke();
            A10.crc2.fill();
        }
        move() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.y > A10.crc2.canvas.height) {
                this.x = Math.random() * A10.crc2.canvas.width;
                this.y = -1;
            }
        }
    }
    A10.Snow = Snow;
})(A10 || (A10 = {}));
//# sourceMappingURL=Snow.js.map