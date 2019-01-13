var A10;
(function (A10) {
    window.addEventListener("load", init);
    let snowflakes = [];
    let kids = [];
    let yValues = [];
    let imgData = ImageData;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        A10.crc2 = canvas.getContext("2d");
        console.log(A10.crc2);
        //SKY     
        let colorGradient = A10.crc2.createLinearGradient(50, 140, 50, 10);
        colorGradient.addColorStop(0, "#B0E2FF");
        colorGradient.addColorStop(1, "#1874CD");
        A10.crc2.fillStyle = colorGradient;
        A10.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //SUN
        A10.drawSun(1020, 20, "#ffff00", "#FFD700");
        //SNOW     
        for (let i = 0; i < 400; i++) {
            let snowflake = new A10.Snow();
            snowflake.x = Math.random() * canvas.width;
            snowflake.y = Math.random() * canvas.height;
            //snowflake.dx = Math.random() * 4 - 2;
            //snowflake.dy = Math.random() * 4 - 2;
            snowflake.fill = "#ffffff";
            snowflakes.push(snowflake);
        }
        console.log(snowflakes);
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        //HILL
        A10.drawHill(0, 300, "#000000", "#ffffff");
        for (let i = 0; i < 50; i++) {
            //RND   NUMS TREE POS
            let randX = (Math.random() * 200 + 0);
            let randY = (Math.random() * 500 + 350);
            A10.drawTree(randX, randY, 10, 20, "#663300", "");
        }
        //ClOUD1
        A10.drawCloud(270, 38, 16, "", "#ffffff");
        A10.drawCloud(260, 21, 13, "", "#ffffff");
        A10.drawCloud(255, 45, 10, "", "#ffffff");
        A10.drawCloud(245, 25, 15, "", "#ffffff");
        A10.drawCloud(240, 40, 14, "", "#ffffff");
        //CLOUD2
        A10.drawCloud(460, 48, 20, "", "#ffffff");
        A10.drawCloud(490, 31, 23, "", "#ffffff");
        A10.drawCloud(475, 25, 20, "", "#ffffff");
        A10.drawCloud(485, 35, 25, "", "#ffffff");
        A10.drawCloud(455, 30, 20, "", "#ffffff");
        //SLEDGEDRIVER       
        for (let i = 0; i < 10; i++) {
            let kid = new A10.Kid();
            kid.stroke = "#ffff00";
            kid.fill = "#DEB887";
            // kid.rotation = 15;
            kids.push(kid);
        }
        console.log(kids);
        imgData = A10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        update();
    }
    ////////////////////////////////////
    function update() {
        window.setTimeout(update, 40);
        A10.crc2.clearRect(0, 0, A10.crc2.canvas.width, A10.crc2.canvas.height);
        A10.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 400; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw(); // keine Parameter erforderlich, denn der Stern weiÃŸ Ã¼ber sich Bescheid
        }
        for (let i = 0; i < 10; i++) {
            let kid = kids[i];
            kid.moveDown();
            if (kid.y > 725) {
            }
        }
        //   console.log(kids[0].y);
        console.log(kids[0].x);
    }
    //WALKER
    function drawWalker(_x, _y) {
        //SLEDGE
        A10.crc2.beginPath();
        A10.crc2.rotate(15 * Math.PI / 180);
        A10.crc2.rect(_x, _y, 10, 20);
        A10.crc2.closePath();
        A10.crc2.fillStyle = "#ff2200";
        A10.crc2.fill();
        A10.crc2.lineWidth = 1;
        A10.crc2.strokeStyle = "black";
        A10.crc2.stroke();
        //DUDE
        A10.crc2.beginPath();
        A10.crc2.fillStyle = "#DEB887";
        A10.crc2.arc(_x + 5, _y - 2.5, 5, 0, 2 * Math.PI);
        A10.crc2.closePath();
        A10.crc2.stroke();
        A10.crc2.fill();
        A10.crc2.rotate(15 * Math.PI / -180);
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=Main.js.map