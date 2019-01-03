var A9;
(function (A9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //SKY
        let colorGradient = crc2.createLinearGradient(50, 140, 50, 10);
        colorGradient.addColorStop(0, "#B0E2FF");
        colorGradient.addColorStop(1, "#1874CD");
        crc2.fillStyle = colorGradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //SUN
        drawSun(1020, 20, "#ffff00", "#FFD700");
        //SNOW        
        for (let i = 0; i < 500; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawCloud(x, y, 2, "", "#ffffff");
        }
        //MOUNTAIN
        drawMountain(0, 300, "#000000", "#ffffff");
        //TREE
        for (let i = 0; i < 50; i++) {
            //RND   NUMS TREE POS
            let randX = (Math.random() * (400 - 15) + 0);
            let randY = (Math.random() * (500 - 200) + 400);
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
        //SLEDGE
        drawSledge(150);
    }
    //SLEDGE
    function drawSledge(_x) {
        crc2.rotate(_x / 10 * Math.PI / 180);
        crc2.beginPath();
        crc2.rect(_x, 285, 20, 7);
        crc2.closePath();
        crc2.fillStyle = "#663300";
        crc2.fill();
        crc2.lineWidth = 1;
        crc2.strokeStyle = "black";
        crc2.stroke();
    }
    //SUN
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //MOUNTAIN
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
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
    function drawTree(_x, _y, _w, _h, _fill1, _fill2) {
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
    function drawCloud(_x, _y, _size, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        crc2.closePath();
        //crc2.stroke();
        crc2.fill();
    }
    //SNOWFLAKE
    function drawFlake(_x, _y, size) {
        crc2.beginPath();
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=canvas.js.map