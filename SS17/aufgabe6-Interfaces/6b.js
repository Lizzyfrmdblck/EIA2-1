var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = m oder 1 = w) und Kommentar");
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
        if (stringArray.length < 5) {
            return "Bitte vervollst�nidgen Sie ihre Eingabe";
        }
        students.push(informations);
        let sex = informations.sex ? "m" : "w";
        return "Abgespeicherte Informationen:" + "\n" + "Matrikelnummer: " + informations.matrikel + "\n" + "Name: " + informations.firstName + informations.lastName + "\n" + "Alter: " + informations.age + "\n" + "Geschlecht: " + sex + "\n" + "Kommentar: " + informations.comment;
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                return "Informationen: " + "\n" + "Matrikelnummer: " + students[i].matrikel + "\n" + "Name: " + students[i].firstName + " " + students[i].lastName;
            }
        }
        return "Student nicht in der Datenbank";
    }
})(StudiVZ || (StudiVZ = {}));
