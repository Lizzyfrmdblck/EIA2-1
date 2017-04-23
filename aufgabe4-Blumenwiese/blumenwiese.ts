//namespace_load_canvas
namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

// canvasInitialize_
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
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

        //RANDOMFLOWERS LEFT
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
