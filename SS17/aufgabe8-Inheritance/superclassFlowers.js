var Aufgabe8_Inheritance;
(function (Aufgabe8_Inheritance) {
    class SuperFlowers {
        constructor() {
            this.setRandomPositionRight();
            this.setRandomCenterSize();
            this.setRandomLeaveSize();
            this.setRandomLeaveColor();
            this.setRandomCenterColor();
        }
        setRandomPositionRight() {
            this.xRandom = (Math.random() * (565 - 385) + 385);
            this.yRandom = (Math.random() * (375 - 200) + 200);
        }
        setRandomCenterSize() {
            this.centerSize = (Math.random() * (7.5 - 4) + 4);
        }
        setRandomLeaveSize() {
            this.leaveSize = (Math.random() * (8 - 4) + 4);
        }
        setRandomLeaveColor() {
            let colorBucket = ["#F7FE2E", "#2E2EFE", "#FE9A2E", "#FA58F4", "#81DAF5"];
            let colorBucket1 = ["#81BEF7", "#F781BE", "#DF0101", "#81F7D8", "#F5DA81"];
            this.leaveColor = colorBucket[Math.floor(Math.random() * colorBucket.length)];
            //            let randomColor1: string = colorBucket1[Math.floor(Math.random() * colorBucket1.length)];
        }
        setRandomCenterColor() {
            let centerColors = ["#b879fc", "#30e3f4", "#f4f130"];
            this.centerColor = centerColors[Math.floor(Math.random() * centerColors.length)];
        }
        //        
        draw() {
            //hi    
        }
    }
    Aufgabe8_Inheritance.SuperFlowers = SuperFlowers;
})(Aufgabe8_Inheritance || (Aufgabe8_Inheritance = {}));
