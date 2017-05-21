namespace Aufgabe8_Inheritance {
    
    export class Flower extends SuperFlowers {
        
        
        constructor() {
            
            super();  
            this.setRandomCenterSize();   
            this.draw();       
        }
        
            draw(): void {
        
            //LEAVES
            crc2.fillStyle = this.leaveColor;
            crc2.beginPath();   
            crc2.arc(this.xRandom, this.yRandom - 5, 3, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.xRandom - 5, this.yRandom, 3, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.xRandom + 5, this.yRandom, 3, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.xRandom, this.yRandom + 5, 3, 0, 2 * Math.PI);
            crc2.fill();
            
            //CENTER
            crc2.beginPath();
            crc2.arc(this.xRandom, this.yRandom, this.centerSize, 0, 2 * Math.PI);
            crc2.fillStyle = this.centerColor;
            crc2.fill();
        }
        
            setRandomCenterSize(): void {
            this.centerSize = (Math.random() * (5.5 - 2) + 2);                            
        }
    }    
}