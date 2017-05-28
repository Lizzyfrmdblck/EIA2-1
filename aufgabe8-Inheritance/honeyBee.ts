
namespace Aufgabe8_Inheritance {

    export class HoneyBee extends SuperBees {
        
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.05;

            this.x = _x;
            this.y = _y;

            this.setStartPosition();
            this.setRandomTargetPosition();


        }


        setStartPosition(): void {
            this.x = 140;
            this.y = 275;

        }



        setRandomTargetPosition(): void {
            let targetFlower: number = Math.round (Math.random() * (fixedFlowers.length - 1));
            this.xTarget = fixedFlowers[targetFlower].xRandom;
            this.yTarget = fixedFlowers[targetFlower].yRandom;
        }

        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        drawBee(): void {
            crc2.beginPath();
//            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFD700";
            
            crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Optik der Bienen wird bei Gelegenheit noch überarbeitet..
        }
    }
}