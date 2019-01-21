namespace A11 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let objects: Object[] = [];

    //      let snowflakes: Snow[] = [];
    //      let kids: Kid[] = [];
    //    let yValues: number[] = [];

    let imgData: ImageData;

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
        for (let i: number = 0; i < 400; i++) {
            let snowflake: Snow = new Snow();
            snowflake.x = Math.random() * canvas.width;
            snowflake.y = Math.random() * canvas.height;
            //snowflake.dx = Math.random() * 4 - 2;
            //snowflake.dy = Math.random() * 4 - 2;
            snowflake.fill = "#ffffff";

            //snowflakes.push(snowflake);
            objects.push(snowflake);

        }

        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;

        //HILL
        drawHill(0, 300, "#000000", "#ffffff");

        for (let i: number = 0; i < 50; i++) {
            //RND   NUMS TREE POS

            let randX: number = (Math.random() * 200 + 0);
            let randY: number = (Math.random() * 500 + 350);

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
        for (let i: number = 0; i < 10; i++) {
            let kid: Kid = new Kid();

          //  kid.stroke = "#ffff00";
          //  kid.fill = "#DEB887";
            // kid.rotation = 15;

            //kids.push(kid);
            objects.push(kid);

        }
        console.log(objects);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        update();
    }

    ////////////////////////////////////

    function update(): void {

        window.setTimeout(update, 40);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < objects.length; i++) {
            let object: Object = objects[i];
            objects[i].draw();  //Children
            objects[i].move(); //Snow
            //objects[i].drawDown();
            //objects[i].moveDown();

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
}