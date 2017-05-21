
namespace Aufgabe8_Inheritance {

    export class HoneyBee extends SuperBees {
        
        xTarget: number;
        yTarget: number;
        speed: number;
        
        constructor(_x: number, _y: number) {
            super (_x, _y);
           
            this.x = _x;
            this.y = _y;
            
            this.setRandomTargetPosition();
            
            
            }
        
        update(): void {
            this.drawBee();
            this.move();    
        }
        
        drawBee(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y - 5, this.size - 2, 0, 2 * Math.PI);
            crc2.arc(this.x, this.y + 5, this.size - 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        //Optik der Bienen wird bei Gelegenheit noch überarbeitet..
        }
        
        setRandomTargetPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.yTarget = Math.random() * crc2.canvas.height;
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
    }    
}