var EIA2;
(function (EIA2) {
    class Snow extends EIA2.Object {
        constructor() {
            super();
            this.size = Math.random() * 1.5 + 2.5;
            this.dx = 0.5;
            this.dy = Math.random() * (2) + 1;
        }
        draw() {
            //    console.log("draw");
            EIA2.crc2.beginPath();
            EIA2.crc2.fillStyle = this.fill;
            EIA2.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            EIA2.crc2.closePath();
            //crc2.stroke();
            EIA2.crc2.fill();
        }
        move() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.y > EIA2.crc2.canvas.height) {
                this.x = Math.random() * EIA2.crc2.canvas.width;
                this.y = -1;
            }
        }
    }
    EIA2.Snow = Snow;
})(EIA2 || (EIA2 = {}));
//# sourceMappingURL=Snow.js.map