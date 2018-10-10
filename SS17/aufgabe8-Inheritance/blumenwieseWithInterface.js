// Die Bienen sind noch nicht funktionst�chtig...
var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    window.addEventListener("load", init);
    Aufgabe8_Inheritance.alleBienen = [];
    let n = 10; // Anzahl der Bienen
    let imgData = ImageData;
    Aufgabe8_Inheritance.fixedFlowers = [];
    console.log("In diesem Array werden die Daten der Blumen abgespeichert, die von den Bienen angeflogen werden sollen.", Aufgabe8_Inheritance.fixedFlowers);
    // canvasInitialize_
    function init(_event) {
        Aufgabe8_Inheritance.canvas = document.getElementsByTagName("canvas")[0];
        console.log(Aufgabe8_Inheritance.canvas);
        Aufgabe8_Inheritance.crc2 = Aufgabe8_Inheritance.canvas.getContext("2d");
        console.log("crc2");
        let landscape = new Aufgabe8_Inheritance.LandscapeTest();
        //RANDOMFLOWERS RIGHT
        for (let i = 0; i < 10; i++) {
            let placedFlowers = new Aufgabe8_Inheritance.Flower1();
            Aufgabe8_Inheritance.fixedFlowers.push(placedFlowers);
            placedFlowers = Aufgabe8_Inheritance.fixedFlowers[i];
        }
        for (let i = 0; i < 20; i++) {
            let flower0 = new Aufgabe8_Inheritance.Flower;
        }
        //getImgData erst, wenn alles gezeichnet ist        
        imgData = Aufgabe8_Inheritance.crc2.getImageData(0, 0, Aufgabe8_Inheritance.canvas.width, Aufgabe8_Inheritance.canvas.height);
        //HONEYBEES
        for (let i = 0; i < n; i++) {
            let values = new Aufgabe8_Inheritance.HoneyBee(140, 275);
            Aufgabe8_Inheritance.alleBienen.push(values);
        }
        window.setTimeout(animate, 20);
        //addBeeOnClick
        Aufgabe8_Inheritance.canvas.addEventListener("click", addBeeOnClick);
        console.log("IMGDATA?");
    }
    //ANIMATE
    function animate() {
        Aufgabe8_Inheritance.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < n; i++) {
            let values = Aufgabe8_Inheritance.alleBienen[i];
            values.update();
        }
        window.setTimeout(animate, 20);
        console.log("Hallo, ist da jemand?");
    }
    function addBeeOnClick(_event) {
        let colors = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (n < 99) {
            n++;
            Aufgabe8_Inheritance.alleBienen.push(new Aufgabe8_Inheritance.Bees(140, 275));
        }
        else {
            n -= 10;
            Aufgabe8_Inheritance.alleBienen.push(new Aufgabe8_Inheritance.Bees(140, 275));
        }
        console.log(n);
    }
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
