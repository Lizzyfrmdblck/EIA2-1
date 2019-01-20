namespace A11 {


    export class Kid extends Object {

        constructor() {
            super(); 
            this.x = 220;
            this.y = Math.random() * 250 + 400;
            this.dx = Math.random() * 3 + 2;
            this.dy = 1;
            

        }

        drawDown(): void {

            this.x = 220;
            this.y = Math.random() * 250 + 400;
            this.dx = Math.random() * 3 + 2;
            this.dy = 1;

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

            //            SLEDGE
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.rect(this.x + 400, this.y + 100, 10, 20);
            crc2.closePath();
            crc2.fillStyle = "#ff2200";
            crc2.fill();
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.stroke();

            //DUDE
            crc2.beginPath();
            crc2.fillStyle = "#DEB887";
            crc2.arc(this.x + 5 + 400, this.y - 2.5 + 100, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


        }

        moveDown(): void {
            this.x += this.dx;
            this.y += this.dy;

            this.drawDown();

            if (this.y > 725) {

                this.moveUp();


            }
        }


        moveUp(): void {
            if (this.y > 200) {

                this.drawUp();
                this.x -= this.dx;
                this.y -= this.dy;
            }
        }
    }
}