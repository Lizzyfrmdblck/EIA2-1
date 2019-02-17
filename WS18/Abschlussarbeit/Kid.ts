namespace EIA2 {


    export class Kid extends Object {

        state: boolean = true;

        constructor() {
            super();
            this.x = 220;
            this.y = Math.random() * 250 + 400;
            this.dx = Math.random() * 3 + 2;
            this.dy = 1;
            this.fill = "#DEB887";


        }

        draw(): void {
            if (this.state == true) {
                this.drawDown();
            }

            else {

                this.drawUp();
                //console.log("hier auch?");
            }
        }

        moveDown(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 720 || this.x > 1080) {
                this.state = false;

                //console.log("Down: " + this.state, "x" + this.x, "y" + this.y);

            }
        }

        moveUp(): void {
            if (this.x > 220) {
                this.x -= this.dx;
                this.y -= this.dy;
                //     this.state = false;
                //console.log("UP: " + this.state, "x" + this.x, "y" + this.y);
            }
            else {
                this.state = true;
            }
        }

        drawDown(): void {

            this.moveDown();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 5, this.y + 5);
            crc2.lineTo(this.x + 20, this.y + 15);
            crc2.lineTo(this.x + 17, this.y + 7);
            // crc2.lineTo(this.x - 2.5, this.y - 10);
            crc2.fillStyle = "#ff2200";

            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = this.fill;
            crc2.arc(this.x + 5, this.y - 2.5, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        drawUp(): void {

            this.moveUp();

            //            SLEDGE
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.rect(this.x, this.y, 10, 20);
            crc2.closePath();
            crc2.fillStyle = "#ff2200";
            crc2.fill();
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //DUDE
            crc2.beginPath();
            crc2.fillStyle = "#DEB887";
            crc2.arc(this.x + 5, this.y - 2.5, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}