var A11;
(function (A11) {
    class Snow extends A11.Object {
        constructor() {
            super();
            this.size = Math.random() * 1.5 + 2.5;
            this.dx = 0.5;
            this.dy = Math.random() * (2) + 1;
        }
        draw() {
            //    console.log("draw");
            A11.crc2.beginPath();
            A11.crc2.fillStyle = this.fill;
            A11.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            A11.crc2.closePath();
            //crc2.stroke();
            A11.crc2.fill();
        }
        move() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.y > A11.crc2.canvas.height) {
                this.x = Math.random() * A11.crc2.canvas.width;
                this.y = -1;
            }
        }
    }
    A11.Snow = Snow;
})(A11 || (A11 = {}));
//# sourceMappingURL=Snow.js.map