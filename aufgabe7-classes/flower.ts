namespace Aufgabe7_Classes {
    
    export class Flower {
        xRandom: number;
        yRandom: number;
        centerSize: number;
        leaveSize: number;
        centerColor: string; 
        leaveColor: string;
        typ: number;
        
        constructor() {
            this.drawType();
            this.setRandomPositionLeft();
            this.setRandomPositionRight();
            this.setRandomCenterSize();
            this.setRandomLeaveSize();
            this.setRandomCenterColor();
            this.setRandomLeaveColor();
        }
              
        drawFlower(): void {
        
            //LEAVES
            crc2.fillStyle = this.leaveColor;
            crc2.beginPath();   
            crc2.arc(this.xRandom, this.yRandom - 5, 7, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.xRandom - 5, this.yRandom, 7, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.xRandom + 5, this.yRandom, 7, 0, 2 * Math.PI);
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(this.xRandom, this.yRandom + 5, 7, 0, 2 * Math.PI);
            crc2.fill();
            
            //CENTER
            crc2.beginPath();
            crc2.arc(this.xRandom, this.yRandom, this.centerSize, 0, 2 * Math.PI);
            crc2.fillStyle = this.centerColor;
            crc2.fill();
        }
        
        drawType(): void {
            if ( this.typ == 1) {
                this.drawFlower();
                }
            else {
                this.drawFlower();
            }        
        }
        
        drawOnSide(): void {
            if ( this.typ == 1) {
                this.drawFlower();
                }
            else {
                this.drawFlower();
            }        
        }
        
        setRandomPositionLeft(): void {
            this.xRandom = (Math.random() * (215 - 15) + 15);    
            this.yRandom = (Math.random() * (375 - 200) + 200);
        }
        
        setRandomPositionRight(): void {
            this.xRandom = (Math.random() * (565 - 385) + 385);    
            this.yRandom = (Math.random() * (375 - 200) + 200);
        }
        
        setRandomCenterSize(): void {
            this.centerSize = (Math.random() * (7.5 - 4) + 4);                            
        }
        
        setRandomLeaveSize(): void {            
            this.leaveSize = (Math.random() * (8 - 4) + 4);
        }
        
        setRandomLeaveColor(): void {
            let colorBucket: string[] = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            let colorBucket1: string[] = ["#81BEF7", "#F781BE", "#DF0101", "#81F7D8", "#F5DA81"];
            
            this.leaveColor = colorBucket[Math.floor(Math.random() * colorBucket.length)];
//            let randomColor1: string = colorBucket1[Math.floor(Math.random() * colorBucket1.length)];
        }
        
        setRandomCenterColor(): void {
            let centerColors: string[] = ["#b879fc", "#30e3f4", "#f4f130"];
            
            this.centerColor = centerColors[Math.floor(Math.random() * centerColors.length)];    
        }
    }    
}