window.onload = function () {
    for (var i = 0; i < 71; i++) {
        var div = document.createElement("div");
        if (i % 2 == 0) {
            div.className = "chessFieldWhite";
        }
        else {
            div.className = "chessFieldBlack";
        }
        document.body.appendChild(div);
        for (var nextdiv = 0; nextdiv < 71; nextdiv++) {
        }
    }
};
//# sourceMappingURL=A2a.js.map