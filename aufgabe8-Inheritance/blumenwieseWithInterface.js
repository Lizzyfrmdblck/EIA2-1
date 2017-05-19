var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    window.addEventListener("load", init);
    var alleBienen = [];
    var n = 10; // Anzahl der Bienen
    var imgData = ImageData;
    var fixedFlowers = [];
    // canvasInitialize_
    function init(_event) {
        Aufgabe8_Inheritance.canvas = document.getElementsByTagName("canvas")[0];
        console.log(Aufgabe8_Inheritance.canvas);
        Aufgabe8_Inheritance.crc2 = Aufgabe8_Inheritance.canvas.getContext("2d");
        console.log("crc2");
        var landscape = new Aufgabe8_Inheritance.LandscapeTest();
        //         //RANDOMFLOWERS LEFT
        //        
        //        for (let i: number = 0; i < 15; i++) {
        //            let flower0: Flower = new Flower();
        //            flower0.drawType();
        //            }
        //RANDOMFLOWERS RIGHT
        for (var i = 0; i < 20; i++) {
            var flower0 = new Aufgabe8_Inheritance.Flower1;
            //            flower0.drawType();
            console.log(flower0);
        }
        //getImgData erst, wenn alles gezeichnet ist        
        imgData = Aufgabe8_Inheritance.crc2.getImageData(0, 0, Aufgabe8_Inheritance.canvas.width, Aufgabe8_Inheritance.canvas.height);
        for (var i = void 0; i < 10; i++) {
            var placedFlowers = new Aufgabe8_Inheritance.Flower;
            placedFlowers = fixedFlowers[i];
            //            placedFlowers.drawType();
            fixedFlowers.push(placedFlowers);
            console.log(placedFlowers);
        }
        // Startpunkt f�r Bienen
        for (var i = 0; i < n; i++) {
            var values = new Aufgabe8_Inheritance.Bee(240, 200);
            alleBienen[i] = values;
        }
        window.setTimeout(animate, 20);
        //addBeeOnClick
        Aufgabe8_Inheritance.canvas.addEventListener("click", addBeeOnClick);
        console.log("IMGDATA?");
    }
    //ANIMATE
    function animate() {
        Aufgabe8_Inheritance.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < n; i++) {
            var values = alleBienen[i];
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
    function addBeeOnClick(_event) {
        var colors = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (n < 99) {
            n++;
            alleBienen.push(new Aufgabe8_Inheritance.Bee(240, 200));
        }
        else {
            n -= 10;
            alleBienen.push(new Aufgabe8_Inheritance.Bee(240, 200));
        }
        console.log(n);
    }
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=blumenwieseWithInterface.js.map