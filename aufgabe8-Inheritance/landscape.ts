namespace Aufgabe8_Inheritance {
    
    export class LandscapeTest {
        
        constructor() {
    
        //SKY
        let colorGradient: any = crc2.createLinearGradient(50, 140, 50, 10);
        colorGradient.addColorStop(0, "#B0E2FF");
        colorGradient.addColorStop(1, "#1874CD");
        crc2.fillStyle = colorGradient;
        crc2.fillRect(0, -225, canvas.width, canvas.height);
        //MOUNTAIN
        this.drawMountain(50, 100, 90, "#000000", "#7F7F7F");
        this.drawMountain(150, 150, 50, "#000000", "#878787");
        this.drawMountain(620, 150, 200, "#000000", "#9E9E9E");
        this.drawMountain(500, 200, 175, "#000000", "#ABABAB");
        //SUN
        this.drawSun(0, 0, "#ffff00", "#FFD700");
        //FIELD        
        crc2.fillStyle = "#68b300";
        crc2.fillRect(0, 175, canvas.width, canvas.height);
        //BIENENSTOCK        
        crc2.fillStyle = "brown";
        crc2.fillRect(125, 255, 40, 40);
        crc2.fillStyle = "black";
        crc2.fillRect(140, 275, 10, 10);
        //STREET
        this.drawStreet(225, 400, "#000000", "#404040");
        //STRIPES
        this.drawStripes(300, 390, 15, 360, "#ffffff", "#ffffff");
        this.drawStripes(300, 340, 12, 315, "#ffffff", "#ffffff");
        this.drawStripes(300, 300, 9, 280, "#ffffff", "#ffffff");
        this.drawStripes(300, 265, 7, 250, "#ffffff", "#ffffff");
        this.drawStripes(300, 235, 5, 220, "#ffffff", "#ffffff");
        this.drawStripes(300, 210, 3, 200, "#ffffff", "#ffffff");
        this.drawStripes(300, 190, 2, 180, "#ffffff", "#ffffff");
        //CLOUD3
        this.drawCloud(180, 75, 10, "#000000", "#ffffff");    
        this.drawCloud(170, 70, 10, "#000000", "#ffffff");
        this.drawCloud(175, 60, 10, "#000000", "#ffffff");
        this.drawCloud(185, 60, 10, "#000000", "#ffffff");
        this.drawCloud(190, 68, 10, "#000000", "#ffffff");
        //CLOUD2
        this.drawCloud(420, 52, 10, "#000000", "#ffffff");    
        this.drawCloud(410, 48, 9, "#000000", "#ffffff");
        this.drawCloud(415, 39, 8, "#000000", "#ffffff");
        this.drawCloud(425, 42, 8, "#000000", "#ffffff");
        this.drawCloud(430, 48, 10, "#000000", "#ffffff");
        //ClOUD1
        this.drawCloud(270, 32, 10, "#000000", "#ffffff");    
        this.drawCloud(260, 28, 9, "#000000", "#ffffff");
        this.drawCloud(265, 19, 8, "#000000", "#ffffff");
        this.drawCloud(276, 22, 8, "#000000", "#ffffff");
        this.drawCloud(270, 28, 10, "#000000", "#ffffff");
        //BIRDS
        this.drawBird(320, 50, 338, 58, "#000000");
        this.drawBird(305, 65, 323, 73, "#000000");
               
    }
            //MOUNTAIN
    drawMountain(_x: number, _y: number, _z: number, _strokeColor: string, _fillColor: string): void {
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
    drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {        
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(300, 175, 80, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();          
    }   
    //STREET
    drawStreet(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    drawStripes(_x: number, _y: number, _width: number, _length: number, _strokeColor: string, _fillColor: string): void {
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
    drawCloud(_x: number, _y: number, _size: number,  _strokeColor: string, _fillColor: string): void {        
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();       
    }
    //BIRD
    drawBird(_x1: number, _y1: number, _x2: number, _y2: number, _strokeColor: string): void { 
        crc2.beginPath();
        crc2.arc(_x1, _y1, 10, 4, 0 * Math.PI, false);
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x2, _y2, 10, 4, 0 * Math.PI, false);
        crc2.scale(1, 1);
        crc2.stroke();
        crc2.closePath();
    }
    
}
}
