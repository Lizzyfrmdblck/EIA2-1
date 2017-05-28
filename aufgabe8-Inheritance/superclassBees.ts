namespace Aufgabe8_Inheritance {
        export class SuperBees {

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
            this.moveBackInCanvas();  
        }
        
        drawBee(): void { 
        //hi
        }
        
        move(): void {
            this.x += (Math.random() * 6 - 3) - 1;
            this.y += Math.random() * 6 - 3;
        }
            
        moveBackInCanvas(): void {
                    if (this.x < 0) {
                this.x = 600;    
            }
            
            if (this.x > 600) {
                this.x = 0;    
            }
            
            if (this.y < 0) {
                this.y = 400;    
            }
            
            if (this.y > 400) {
                this.y = 0;    
            }    
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