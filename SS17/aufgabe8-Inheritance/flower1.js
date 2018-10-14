var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class Flower1 extends Aufgabe8_Inheritance.SuperFlowers {
        constructor() {
            super();
            this.setCenterColor();
            this.draw();
        }
        draw() {
            //LEAVES
            Aufgabe8_Inheritance.crc2.fillStyle = this.leaveColor;
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom - 5, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom - 5, this.yRandom, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom + 5, this.yRandom, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom + 5, 7, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fill();
            //CENTER
            Aufgabe8_Inheritance.crc2.beginPath();
            Aufgabe8_Inheritance.crc2.arc(this.xRandom, this.yRandom, this.centerSize, 0, 2 * Math.PI);
            Aufgabe8_Inheritance.crc2.fillStyle = this.centerColor;
            Aufgabe8_Inheritance.crc2.fill();
        }
        //        
        //        setRandomCenterColor(): void {
        //            let centerColor: string = "ffffff";
        //            
        //            this.centerColor = centerColor;    
        //        }
        setCenterColor() {
            this.centerColor = "#FFD700";
        }
    }
    Aufgabe8_Inheritance.Flower1 = Flower1;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
//# sourceMappingURL=flower1.js.map