namespace Aufgabe7_Classes {
    
    export class Flower {
        x: number;
        y: number;
        centerSize: number;
        leaveSize: number;
        centerColor: string; 
        leaveColor: string;
        typ: number;
        
        constructor(_x: number, _y: number, _size: number, _color: string, _color2: string) {
            this.x = _x;
            this.y = _y;
            this.centerSize = _size;
            this.centerColor = _color;     
            this.leaveColor = _color2;
        }
        
        
        
        
        drawFlower(): void {
        
            //LEAVES
            crc2.fillStyle = this.leaveColor;
            crc2.beginPath();   
            crc2.arc(this.x, this.y - 5, 7, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y, 7, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y, 7, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.x, this.y + 5, 7, 0, 2 * Math.PI);
            crc2.fill();
            
            //CENTER
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.centerSize, 0, 2 * Math.PI);
            crc2.fillStyle = this.centerColor;
            crc2.fill();
        }
        
        draw(): void {
            if ( this.typ == 1) {
                this.drawFlower();
                }
            else {
                this.drawFlower();
            }
        }
    }    
}