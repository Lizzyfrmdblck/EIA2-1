
window.onload = function (): void{

    for (let i: number = 0; i < 71; i++) {
        let div: HTMLElement = document.createElement("div");
        
        if (i % 2 == 0) {
            div.className = "chessFieldWhite";
        } else {
            div.className = "chessFieldBlack";
        }
        
        
        
        document.body.appendChild(div);
        
    
        let rice: number = Math.pow(2, i);
        let riceToString: string = rice.toString();
        
        div.textContent = riceToString;
    
    }
        
}; 
    
    
                // PROBIEREREI

//    for (let nextdiv: number = 0; nextdiv < 71; nextdiv++) {
//        let rice: HTMLElement = document.textContent("1");
// 
//    for (let r: number = 1; r <  64; r ** i) {
//        
//        let rToString: string = r.toString();
//        
//        document.getElementsByTagName("div")[0].innerHTML = rToString;
//        }
//   }       