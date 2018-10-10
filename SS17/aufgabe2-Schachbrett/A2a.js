window.onload = function () {
    for (let i = 0; i < 64; i++) {
        let div = document.createElement("div");
        if (i % 2 == 0) {
            div.className = "chessFieldWhite";
        }
        else {
            div.className = "chessFieldBlack";
        }
        div.setAttribute("i", i.toString());
        document.body.appendChild(div);
        let rice = Math.pow(2, i);
        let riceToString = rice.toString();
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
