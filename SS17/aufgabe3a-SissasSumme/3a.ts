window.onload = function (): void {
    
    let row: number = 0;
    let exponent: number = 64; 
    let rice: number = 1;
    
    for (let i: number = 0; i < exponent; i++) {
        let div: HTMLElement = document.createElement("div");
        document.body.appendChild(div);        
        if (i % 8 == 0) { 
            div.className += " clearfloating"; //Zeilenumbruch nach 8 Feldern//
            row++;
        }        
        if (row % 2 == 1) {
            if (i % 2 == 0) {
                div.className += " chessFieldBlack";
            }
            if (i % 2 == 1) {
                div.className += " chessFieldWhite";
            }
        }       
        if (row % 2 == 0) {           
            if (i % 2 == 0) {
                div.className += " chessFieldWhite";
            }
            if (i % 2 == 1) {
                div.className += " chessFieldBlack";
            }
        }
        rice = Math.pow(2, i); //2 hoch i
        let riceExpo: string = rice.toExponential(2); 
        div.textContent = riceExpo;
        document.body.appendChild(div);
    }
    
    // AUFGABE 3a 


        let firstRow: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
            for (let i: number = 0; i <= 8; i++) {   
            
            firstRow[i].addEventListener("click", function(): void{
            this.classList.toggle("selection");
                totalRice();
    });
}
    
        function totalRice(): void {
            
        let divSelection: NodeListOf<Element> = document.getElementsByClassName("selection");
        let totalRiceInBox: number = 0;

        if (divSelection.length == 0) {
            document.getElementById("totalRiceBox").style.display = "none";
        }
        if (divSelection.length != 0) {
            document.getElementById("totalRiceBox").style.display = "block";
             }   
        
        for (let i: number = 0; i < divSelection.length; i++) {
            
            totalRiceInBox += Number(divSelection[i].textContent);
            document.getElementById("totalRiceBox").textContent = "Total Rice:" + " " + "Dezimal: " + totalRiceInBox.toString() + " " + "Hexadezimal: " + totalRiceInBox.toString(16);
        }
    }
};
        //Box soll dem Mauscursor folgen
        document.addEventListener("mousemove", function(box): void {
            
                document.getElementById("totalRiceBox").style.left = (box.clientX) + "px";
                document.getElementById("totalRiceBox").style.top = (box.clientY) + "px";
            
});
