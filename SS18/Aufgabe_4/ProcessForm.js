var Aufgabe_4;
(function (Aufgabe_4) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let courseSelectBox = document.getElementById("selectBox");
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            course: courseSelectBox.value
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        Aufgabe_4.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        Aufgabe_4.studiSimpleArray.push(studi);
        console.log(Aufgabe_4.studiSimpleArray);
        console.log(Aufgabe_4.studiHomoAssoc);
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in Aufgabe_4.studiHomoAssoc) {
            let studi = Aufgabe_4.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + studi.course + ",";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(Aufgabe_4.studiSimpleArray);
        console.groupEnd();
        /*console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();*/
    }
    function search(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let inputs = document.getElementsByTagName("input");
        let matrikelNum = inputs[6].value;
        console.log(matrikelNum);
        let studi = Aufgabe_4.studiHomoAssoc[matrikelNum];
        if (typeof studi === "undefined") {
            output.value = "not in database";
        }
        else {
            let line = matrikelNum + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + studi.course + ",";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }
})(Aufgabe_4 || (Aufgabe_4 = {}));
