namespace Aufgabe8_Inheritance {
        export class SuperFlowers {
            
        xRandom: number;
        yRandom: number;
        centerSize: number;
        leaveSize: number;
        centerColor: string; 
        leaveColor: string;   
        typ: number;
            
            constructor() {
            
                this.setRandomPositionRight();
                this.setRandomCenterSize();
                this.setRandomLeaveSize();
                this.setRandomLeaveColor();
                this.setRandomCenterColor();

                
            
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
//        
        draw(): void {
            //hi    
        }    
       
    }    
}