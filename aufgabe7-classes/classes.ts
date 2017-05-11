
namespace Aufgabe7_Classes {

    export class Bee {
        x: number; 
        y: number;
        size: number; 
        color: string;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.setRandomstyle();
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
        
        move(): void {
            this.x += (Math.random() * 6 - 3) - 1;
            this.y += Math.random() * 6 - 3;
        }
        
        setRandomstyle(): void {
            let colors: string [] = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            let randomColor: string = colors[Math.floor(Math.random() * colors.length)];
            let randomSize: number = (Math.random() * (8 - 4) + 4);
            
            this.size = randomSize;
            this.color = randomColor; 
        }
    }    
}