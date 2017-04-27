//namespace_load_canvas
namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    
    let x: number [] = []; // Array, weil hier immer der neu generierte x-Wert abgespeichert wird
    let y: number [] = []; // Array, weil hier immer der neu generierte y-Wert abgespeichert wird
    let n: number = 10; // Anzahl der Bienen
        let imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
// canvasInitialize_
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log("crc2");

        //SKY
        let colorGradient: any = crc2.createLinearGradient(50, 140, 50, 10);
        colorGradient.addColorStop(0, "#B0E2FF");
        colorGradient.addColorStop(1, "#1874CD");
        crc2.fillStyle = colorGradient;
        crc2.fillRect(0, -225, canvas.width, canvas.height);
        //MOUNTAIN
        drawMountain(50, 100, 90, "#000000", "#7F7F7F");
        drawMountain(150, 150, 50, "#000000", "#878787");
        drawMountain(620, 150, 200, "#000000", "#9E9E9E");
        drawMountain(500, 200, 175, "#000000", "#ABABAB");
        //SUN
        drawSun(0, 0, "#ffff00", "#FFD700");
        //FIELD        
        crc2.fillStyle = "#68b300";
        crc2.fillRect(0, 175, canvas.width, canvas.height);
        //BIENENSTOCK        
        crc2.fillStyle = "brown";
        crc2.fillRect(225, 180, 40, 40);
        crc2.fillStyle = "black";
        crc2.fillRect(240, 200, 10, 10);
        //BEE
        drawBee(240, 200);
        //STREET
        drawStreet(225, 400, "#000000", "#404040");
        //STRIPES
        drawStripes(300, 390, 15, 360, "#ffffff", "#ffffff");
        drawStripes(300, 340, 12, 315, "#ffffff", "#ffffff");
        drawStripes(300, 300, 9, 280, "#ffffff", "#ffffff");
        drawStripes(300, 265, 7, 250, "#ffffff", "#ffffff");
        drawStripes(300, 235, 5, 220, "#ffffff", "#ffffff");
        drawStripes(300, 210, 3, 200, "#ffffff", "#ffffff");
        drawStripes(300, 190, 2, 180, "#ffffff", "#ffffff");
        //CLOUD3
        drawCloud(180, 75, 10, "#000000", "#ffffff");    
        drawCloud(170, 70, 10, "#000000", "#ffffff");
        drawCloud(175, 60, 10, "#000000", "#ffffff");
        drawCloud(185, 60, 10, "#000000", "#ffffff");
        drawCloud(190, 68, 10, "#000000", "#ffffff");
        //CLOUD2
        drawCloud(420, 52, 10, "#000000", "#ffffff");    
        drawCloud(410, 48, 9, "#000000", "#ffffff");
        drawCloud(415, 39, 8, "#000000", "#ffffff");
        drawCloud(425, 42, 8, "#000000", "#ffffff");
        drawCloud(430, 48, 10, "#000000", "#ffffff");
        //ClOUD1
        drawCloud(270, 32, 10, "#000000", "#ffffff");    
        drawCloud(260, 28, 9, "#000000", "#ffffff");
        drawCloud(265, 19, 8, "#000000", "#ffffff");
        drawCloud(276, 22, 8, "#000000", "#ffffff");
        drawCloud(270, 28, 10, "#000000", "#ffffff");
        //BIRDS
        drawBird(320, 50, 338, 58, "#000000");
        drawBird(305, 65, 323, 73, "#000000");
        
        //RANDOMFLOWERS LEFT
        let colorBucket: string[] = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
        let colorBucket1: string[] = ["#81BEF7", "#F781BE", "#DF0101", "#81F7D8", "#F5DA81"];
        let centerColors: string[] = ["#b879fc", "#30e3f4", "#f4f130"];
        
        for (let i: number = 0; i < 35; i++) {
            let randomX: number = (Math.random() * (215 - 15) + 15);    
            let randomY: number = (Math.random() * (375 - 200) + 200);
            let randomCenterSize: number = (Math.random() * (7.5 - 4) + 4);            
            let randomLeaveSize: number = (Math.random() * (8 - 4) + 4);
            let randomColor: string = colorBucket[Math.floor(Math.random() * colorBucket.length)];
            let randomColor1: string = colorBucket1[Math.floor(Math.random() * colorBucket1.length)];
            let randomCenterColor: string = centerColors[Math.floor(Math.random() * centerColors.length)];
            let randomFlower: number = Math.floor((Math.random() * 2)) + 1;
            
            if ( randomFlower == 1) {
                drawFlower0(randomX, randomY, randomCenterSize, randomLeaveSize, randomCenterColor, randomColor);
                }
            else {
                drawFlower0(randomX, randomY, randomCenterSize, randomLeaveSize, randomCenterColor, randomColor1);
            }
        } 

        //RANDOMFLOWERS RIGHT
        for (let i: number = 0; i < 35; i++) {
            let randomX: number = (Math.random() * (565 - 385) + 385);    
            let randomY: number = (Math.random() * (375 - 200) + 200);
            let randomCenterSize: number = (Math.random() * (7.5 - 4) + 4);            
            let randomLeaveSize: number = (Math.random() * (8 - 4) + 4);
            let randomColor: string = colorBucket[Math.floor(Math.random() * colorBucket.length)];
            let randomColor1: string = colorBucket1[Math.floor(Math.random() * colorBucket1.length)];
            let randomCenterColor: string = centerColors[Math.floor(Math.random() * centerColors.length)];
            let randomFlower: number = Math.floor((Math.random() * 2)) + 1;
            
            if ( randomFlower == 1) {
                drawFlower0(randomX, randomY, randomCenterSize, randomLeaveSize, randomCenterColor, randomColor);
                }
            else {
                drawFlower0(randomX, randomY, randomCenterSize, randomLeaveSize, randomCenterColor, randomColor1);
            }
        }
        // F�r jede Biene (n) muss ein zuf�lliger x/y Wert generiert werden 
        for (let i: number = 0; i < n; i++) {
            x[i] = 240; //Math.random() * 700;
            y[i] = 200; //Math. random() * 700;
        }
                        
        //getImgData erst, wenn alles gezeichnet ist
        
        
        window.setTimeout(animate, 20);
        
        crc2.getImageData(0, 0, 400, 600);
        crc2.putImageData(imgData, 400, 600);
        
        console.log("IMGDATA?");
    }
    
    //ANIMATE
    function animate (): void {
            
        
//       crc2.fillStyle = imgData;
//       crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        for (let i: number = 0; i < n; i++) {
            x[i] += (Math.random() * 10 - 5) - 1;
            y[i] += Math.random() * 10 - 5;
            drawBee(x[i], y[i]);
        }   
        
         
            window.setTimeout(animate, 20);
    
               
 
        console.log("Hallo, ist da jemand?");    
    }
//    //IMGDATA
//    function imgData (): void {
//        crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height) = ImageData;
//        crc2.putImageData(imageData = ImageData);   
//    }
    //BEE
    function drawBee(_x: number, _y: number): void {

        crc2.fillStyle = "white";
        crc2.fillRect(_x, _y, 10, 10);

    }
    //MOUNTAIN
    function drawMountain(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - _z, _y + _z);
        crc2.lineTo(_x, _y - _z);
        crc2.lineTo(_x + _z, _y + _z);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //SUN
    function drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {        
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(300, 175, 80, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();          
    }   
    //STREET
    function drawStreet(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor; 
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(295, 176);
        crc2.lineTo(305, 176);
        crc2.lineTo(375, 400);
        crc2.closePath();        
        crc2.fill();
        crc2.stroke();     
    }
    //STRIPES
    function drawStripes(_x: number, _y: number, _width: number, _length: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor; 
        crc2.lineWidth = _width;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(300, _length);
        crc2.closePath();        
        crc2.fill();
        crc2.stroke();             
    }
    //CLOUD
    function drawCloud(_x: number, _y: number, _size: number,  _strokeColor: string, _fillColor: string): void {        
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();       
    }
    //BIRD
    function drawBird(_x1: number, _y1: number, _x2: number, _y2: number, _strokeColor: string): void { 
        crc2.beginPath();
        crc2.arc(_x1, _y1, 10, 4, 0 * Math.PI, false);
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x2, _y2, 10, 4, 0 * Math.PI, false);
        crc2.scale(1, 1);
        crc2.stroke();
        crc2.closePath();
    } 
    //FLOWER0
    function drawFlower0(_x: number, _y: number, _centerSize: number, _leaveSize: number, _centerColor: string, _leaveColor: string): void {
        //LEAVES
        crc2.fillStyle = _leaveColor;
        crc2.beginPath();   
        crc2.arc(_x, _y - 5, 7, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x - 5, _y, 7, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 5, _y, 7, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x, _y + 5, 7, 0, 2 * Math.PI);
        crc2.fill();
        //CENTER
        crc2.beginPath();
        crc2.arc(_x, _y, _centerSize, 0, 2 * Math.PI);
        crc2.fillStyle = _centerColor;
        crc2.fill();
    }
}
