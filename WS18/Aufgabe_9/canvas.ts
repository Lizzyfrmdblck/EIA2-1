namespace A9 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        console.log(crc2);

        //SKY
        let colorGradient: any = crc2.createLinearGradient(50, 140, 50, 10);
        colorGradient.addColorStop(0, "#B0E2FF");
        colorGradient.addColorStop(1, "#1874CD");
        crc2.fillStyle = colorGradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //SUN
        drawSun(1020, 20, "#ffff00", "#FFD700");

        //SNOW        
        for (let i: number = 0; i < 500; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            drawCloud(x, y, 2, "", "#ffffff");
        }

        //HILL
        drawHill(0, 300, "#000000", "#ffffff");

        //TREE
        for (let i: number = 0; i < 50; i++) {
            //RND   NUMS TREE POS
            let randX: number = (Math.random() * (400) + 0);
            let randY: number = (Math.random() * (300) + 450);

            drawTree(randX, randY, 10, 20, "#663300", "");
        }

        //ClOUD1
        drawCloud(270, 38, 16, "", "#ffffff");
        drawCloud(260, 21, 13, "", "#ffffff");
        drawCloud(255, 45, 10, "", "#ffffff");
        drawCloud(245, 25, 15, "", "#ffffff");
        drawCloud(240, 40, 14, "", "#ffffff");
        //CLOUD2
        drawCloud(460, 48, 20, "", "#ffffff");
        drawCloud(490, 31, 23, "", "#ffffff");
        drawCloud(475, 25, 20, "", "#ffffff");
        drawCloud(485, 35, 25, "", "#ffffff");
        drawCloud(455, 30, 20, "", "#ffffff");
        //SLEDGEDRIVER       
        drawSledgeDriver(150, 285, "#ffff00", "#DEB887", 15);
        drawSledgeDriver(475, 287, "#ffff00", "#DEB887", 0);
        drawSledgeDriver(675, 290, "#ffff00", "#DEB887", 0);
        drawSledgeDriver(875, 292, "#ffff00", "#DEB887", 0);
        //WALKER
        drawWalker(660, 400);
        drawWalker(700, 400);
        drawWalker(740, 400);
        drawWalker(780, 400);
        drawWalker(820, 400);
    
    }

    //WALKER
    function drawWalker(_x: number, _y: number): void {
        //SLEDGE
        crc2.beginPath();
        crc2.rect(_x, _y, 10, 20);
        crc2.closePath();
        crc2.fillStyle = "#ff2200";
        crc2.fill();
        crc2.lineWidth = 1;
        crc2.strokeStyle = "black";
        crc2.stroke();

        //DUDE
        crc2.beginPath();
        crc2.fillStyle = "#DEB887";
        crc2.arc(_x + 5, _y - 2.5, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //SLEDGEDRIVER
    function drawSledgeDriver(_x: number, _y: number, _strokeColor: string, _fillColor: string, _rotation: number): void {
        //SLEDGE
        
        crc2.beginPath();
        crc2.rotate(_rotation * Math.PI / 180);
        crc2.rect(_x, _y, 20, 7);
        crc2.closePath();
        crc2.fillStyle = "#ff2200";
        crc2.fill();
        crc2.lineWidth = 1;
        crc2.strokeStyle = "black";
        crc2.stroke();

        //HEAD
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 5, _y - 2.5, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //SUN
    function drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //HILL
    function drawHill(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1500, _y + 420);
        crc2.lineTo(_x + 1000, _y + 720);
        crc2.lineTo(_x - 1000, _y + 200);
        crc2.closePath();
        crc2.fill();
    }

    function drawTree(_x: number, _y: number, _w: number, _h: number, _fill1: string, _fill2: string): void {
        crc2.fillStyle = _fill1;
        crc2.beginPath();
        crc2.rect(_x, _y, _w, _h);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.moveTo(_x + 5, _y + 7.5);
        crc2.lineTo(_x - 10, _y + 5);
        crc2.lineTo(_x + 5, _y - 25);
        crc2.lineTo(_x + 20, _y + 5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    //CLOUD
    function drawCloud(_x: number, _y: number, _size: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
    }

}