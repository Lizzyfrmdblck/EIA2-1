// Die Bienen sind noch nicht funktionstüchtig...


namespace Aufgabe8_Inheritance {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
        
    export let alleBienen: SuperBees[] = [];
    let n: number = 10; // Anzahl der Bienen
    
    let imgData: any = ImageData;

    export let canvas: HTMLCanvasElement;    
    export let fixedFlowers: Flower[] = []; 
    console.log("In diesem Array werden die Daten der Blumen abgespeichert, die von den Bienen angeflogen werden sollen.", fixedFlowers);
        // canvasInitialize_
        function init(_event: Event): void {
               
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log("crc2");
        
        let landscape: LandscapeTest = new LandscapeTest();
                 
        //RANDOMFLOWERS RIGHT
        for (let i: number = 0; i < 5; i++) {
            let placedFlowers: SuperFlowers = new Flower1;
            
            fixedFlowers.push(placedFlowers);
            placedFlowers = fixedFlowers[i];
        }
            
        for (let i: number = 0; i < 20; i++) {
            let flower0: SuperFlowers = new Flower; 
             
        }
            
        //getImgData erst, wenn alles gezeichnet ist        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);        
        
        // Startpunkt für Bienen
        for (let i: number = 0; i < n; i++) {
            
            let values: HoneyBee = new HoneyBee(140, 275);
            
            alleBienen.push(values);
            
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
            let values: SuperBees = alleBienen[i];
            values.update();
        }   
         
        window.setTimeout(animate, 20); 
     
        console.log("Hallo, ist da jemand?");    
    }
    
    function addBeeOnClick (_event: Event): void {

        let colors: string [] = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
        let randomColor: string = colors[Math.floor(Math.random() * colors.length)];
            if (n < 99) {
                n++;
                alleBienen.push(new SuperBees(140, 275));
            }
            
            else {
               n -= 10;
               alleBienen.push(new SuperBees(140, 275));
            }              
        console.log(n);
    } 
}
