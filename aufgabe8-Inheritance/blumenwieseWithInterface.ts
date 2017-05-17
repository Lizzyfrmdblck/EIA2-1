
namespace Aufgabe8_Inheritance {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
        
    let alleBienen: Bee[] = [];
    let n: number = 10; // Anzahl der Bienen
    let imgData: any = ImageData;

    export let canvas: HTMLCanvasElement;
    
    let fixedFlowers: Flower[] = []; 
// canvasInitialize_
        function init(_event: Event): void {
               
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log("crc2");
        
        let landscape: Landscape = new Landscape();
                 
         //RANDOMFLOWERS LEFT
        
        for (let i: number = 0; i < 15; i++) {
            let flower0: Flower = new Flower();
            flower0.drawType();
            }

        //RANDOMFLOWERS RIGHT
        for (let i: number = 0; i < 15; i++) {
            let flower0: Flower = new Flower();
            flower0.drawType();
        }
        
        //getImgData erst, wenn alles gezeichnet ist        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            
        for (let i: number; i < 10; i++) {
            let placedFlowers: Flower = new Flower; 
            placedFlowers = fixedFlowers[i];
            fixedFlowers.push(placedFlowers);
            console.log(placedFlowers);    
        }
        
        // Startpunkt für Bienen
        for (let i: number = 0; i < n; i++) {
            
            let values: Bee = new Bee(240, 200);
            
            alleBienen[i] = values;
            
        }      
        
        window.setTimeout(animate, 20);
       
        //addBeeOnClick
        canvas.addEventListener("click", addBeeOnClick);
        
        console.log("IMGDATA?");
    }
    
    //ANIMATE
    function animate (): void {
                    
        crc2.putImageData(imgData, 0, 0);
        
        for (let i: number = 0; i < n; i++) {
            let values: Bee = alleBienen[i];
            values.update();
            
            if (values.x < 0) {
                values.x = 600;    
            }
            
            if (values.x > 600) {
                values.x = 0;    
            }
            
            if (values.y < 0) {
                values.y = 400;    
            }
            
            if (values.y > 400) {
                values.y = 0;    
            }
        }   
         
        window.setTimeout(animate, 20); 
     
        console.log("Hallo, ist da jemand?");    
    }
    
    function addBeeOnClick (_event: Event): void {

        let colors: string [] = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
        let randomColor: string = colors[Math.floor(Math.random() * colors.length)];
            if (n < 99) {
                n++;
                alleBienen.push(new Bee(240, 200));
            }
            
            else {
               n -= 10;
               alleBienen.push(new Bee(240, 200));
            }              
        console.log(n);
    } 
}
