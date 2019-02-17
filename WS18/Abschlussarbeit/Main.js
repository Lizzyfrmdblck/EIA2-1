var EIA2;
(function (EIA2) {
    window.addEventListener("load", init);
    let objects = [];
    //      let snowflakes: Snow[] = [];
    //      let kids: Kid[] = [];
    //    let yValues: number[] = [];
    let imgData;
    function init(_event) {
        console.log("Canvas started");
        let startButton = document.getElementById("start");
        startButton.addEventListener("click", startGame);
        let timer = document.getElementById("timer").innerHTML = ("0" + ":" + "00");
        let canvas = document.getElementsByTagName("canvas")[0];
        EIA2.crc2 = canvas.getContext("2d");
        console.log(EIA2.crc2);
        //*** SKY ***//     
        let colorGradient = EIA2.crc2.createLinearGradient(50, 140, 50, 10);
        colorGradient.addColorStop(0, "#B0E2FF");
        colorGradient.addColorStop(1, "#1874CD");
        EIA2.crc2.fillStyle = colorGradient;
        EIA2.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //*** SUN ***//
        EIA2.drawSun(1020, 20, "#ffff00", "#FFD700");
        //*** SNOW ***//     
        for (let i = 0; i < 400; i++) {
            let snowflake = new EIA2.Snow();
            snowflake.x = Math.random() * canvas.width;
            snowflake.y = Math.random() * canvas.height;
            snowflake.fill = "#ffffff";
            objects.push(snowflake);
        }
        //*** HILL ***//     
        EIA2.drawHill(0, 300, "#000000", "#ffffff");
        //*** TREES ***//
        for (let i = 0; i < 50; i++) {
            //RND NUMS TREE POS
            let randX = (Math.random() * 200 + 0);
            let randY = (Math.random() * 500 + 350);
            EIA2.drawTree(randX, randY, 10, 20, "#663300", "");
        }
        //*** CLOUDS ***//
        //ClOUD1
        EIA2.drawCloud(270, 38, 16, "", "#ffffff");
        EIA2.drawCloud(260, 21, 13, "", "#ffffff");
        EIA2.drawCloud(255, 45, 10, "", "#ffffff");
        EIA2.drawCloud(245, 25, 15, "", "#ffffff");
        EIA2.drawCloud(240, 40, 14, "", "#ffffff");
        //CLOUD2
        EIA2.drawCloud(460, 48, 20, "", "#ffffff");
        EIA2.drawCloud(490, 31, 23, "", "#ffffff");
        EIA2.drawCloud(475, 25, 20, "", "#ffffff");
        EIA2.drawCloud(485, 35, 25, "", "#ffffff");
        EIA2.drawCloud(455, 30, 20, "", "#ffffff");
        //*** KIDS ***//       
        for (let i = 0; i < 10; i++) {
            let kid = new EIA2.Kid();
            objects.push(kid);
        }
        console.log(objects);
        imgData = EIA2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //update();
    }
    ////////////////////////////////////
    //    function submitForm(): void {
    //        let form: HTMLFormElement = document.getElementsByTagName("form")[0];
    //        if (form.checkValidity() == true) {
    //            document.getElementById("input").classList.add("hidden");
    //            form.submit();
    //            startGame();
    //
    //            return;
    //
    //        } else {
    //            alert("Korrigiere pls deine Angaben.");
    //        }
    //    }
    function startGame() {
        startTimer();
        update();
        document.getElementById("input").classList.add("hidden");
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", throwBall);
    }
    function update() {
        window.setTimeout(update, 40);
        EIA2.crc2.clearRect(0, 0, EIA2.crc2.canvas.width, EIA2.crc2.canvas.height);
        EIA2.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            objects[i].draw(); //Children
            objects[i].move(); //Snow
        }
        //        for (let i: number = 0; i < 400; i++) {
        //            let snowflake: Snow = snowflakes[i];
        //            snowflake.move();
        //            snowflake.draw(); // keine Parameter erforderlich, denn der Stern weiÃŸ Ã¼ber sich Bescheid
        //        }
        //
        //        for (let i: number = 0; i < 10; i++) {
        //            kids[i].moveDown();
        //            kids[i].drawDown();
        //            console.log(kids[0].x);
        //
        //        }
    }
    //
    function throwBall() {
        console.log("BATZ");
    }
    function startTimer() {
        var presentTime = document.getElementById("timer").innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((parseInt(timeArray[1]) - 1));
        if (s == 59) {
            parseInt(m) - 1;
        }
        if (Number(m) == 0 && s == 0) {
            alert("timer complete");
        }
        document.getElementById("timer").innerHTML = m + ":" + s;
        setTimeout(startTimer, 1000);
    }
    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = 0 + sec;
        }
        ; // add zero in front of numbers < 10
        if (sec < 0) {
            sec = 59;
        }
        ;
        return sec;
    }
})(EIA2 || (EIA2 = {}));
//# sourceMappingURL=Main.js.map