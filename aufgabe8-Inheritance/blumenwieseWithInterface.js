var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    window.addEventListener("load", init);
    var alleBienen = [];
    var n = 10; // Anzahl der Bienen
    var imgData = ImageData;
    Aufgabe8_Inheritance.fixedFlowers = [];
    console.log("In diesem Array werden die Daten der Blumen abgespeichert, die von den Bienen angeflogen werden sollen.", Aufgabe8_Inheritance.fixedFlowers);
    // canvasInitialize_
    function init(_event) {
        Aufgabe8_Inheritance.canvas = document.getElementsByTagName("canvas")[0];
        console.log(Aufgabe8_Inheritance.canvas);
        Aufgabe8_Inheritance.crc2 = Aufgabe8_Inheritance.canvas.getContext("2d");
        console.log("crc2");
        var landscape = new Aufgabe8_Inheritance.LandscapeTest();
        //RANDOMFLOWERS RIGHT
        for (var i = 0; i < 5; i++) {
            var placedFlowers = new Aufgabe8_Inheritance.Flower1;
            Aufgabe8_Inheritance.fixedFlowers.push(placedFlowers);
            placedFlowers = Aufgabe8_Inheritance.fixedFlowers[i];
        }
        for (var i = 0; i < 20; i++) {
            var flower0 = new Aufgabe8_Inheritance.Flower;
        }
        //getImgData erst, wenn alles gezeichnet ist        
        imgData = Aufgabe8_Inheritance.crc2.getImageData(0, 0, Aufgabe8_Inheritance.canvas.width, Aufgabe8_Inheritance.canvas.height);
        // Startpunkt f�r Bienen
        for (var i = 0; i < n; i++) {
            var values = new Aufgabe8_Inheritance.SuperBees(140, 275);
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
        }
        window.setTimeout(animate, 20);
        console.log("Hallo, ist da jemand?");
    }
    function addBeeOnClick(_event) {
        var colors = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (n < 99) {
            n++;
            alleBienen.push(new Aufgabe8_Inheritance.SuperBees(140, 275));
        }
        else {
            n -= 10;
            alleBienen.push(new Aufgabe8_Inheritance.SuperBees(140, 275));
        }
        console.log(n);
    }
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=blumenwieseWithInterface.js.map