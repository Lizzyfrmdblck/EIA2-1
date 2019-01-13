namespace A10 {
    export class Snow {
        x: number;
        y: number;
        dx: number = 0.5;
        dy: number = Math.random() * (2) + 1;
        size: number = Math.random() * 1.5 + 2.5;
        fill: string;

        draw(): void {
        //    console.log("draw");
            crc2.beginPath();
            crc2.fillStyle = this.fill;
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            //crc2.stroke();
            crc2.fill();
        }

        move(): void {
            this.y += this.dy;
            this.x += this.dx;

            if ( this.y > crc2.canvas.height) {
                this.x = Math.random() * crc2.canvas.width;
                this.y = -1;

            }

        }
    }
}