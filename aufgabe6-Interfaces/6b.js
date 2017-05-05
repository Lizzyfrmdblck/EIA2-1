var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var stringArray;
        stringArray = _input.split(",");
        var informations = {
            matrikel: parseInt(stringArray[0]),
            lastName: stringArray[1],
            firstName: stringArray[2],
            age: parseInt(stringArray[3]),
            sex: parseInt(stringArray[4]) == 0,
            comment: stringArray[5]
        };
        students.push(informations);
        return "Abgespeicherte Informationen:" + "\n" + "Matrikelnummer: " + informations.matrikel + "\n" + "Name: " + informations.firstName + informations.lastName + "\n" + "Alter: " + informations.age + "\n" + "Geschlecht: " + informations.sex + "\n" + "Kommentar: " + informations.comment;
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                return "Informationen: " + "\n" + "Matrikelnummer: " + students[i].matrikel + "\n" + "Name: " + students[i].firstName + " " + students[i].lastName;
            }
        }
        //        return "Student nicht in der Datenbank";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=6b.js.map