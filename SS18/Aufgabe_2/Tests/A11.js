//Warten bis der DOM-Content geladen ist
document.addEventListener('DOMContentLoaded', function () {
    // Definieren der Variablen
    var menu = false;
    var login = false;
    //Bei 'click' auf den Burger soll sich das Men� aufklappen.
    //Ausgangslage ist aber,dass  nicht geklickt wird (if). Soll geschlossen bleiben (false): display 'none'
    //In allen anderen F�llen (else), also 'click' --> true : display 'block'
    document.getElementById("HamburgerIcon").addEventListener("click", function () {
        if (menu == true) {
            document.getElementById("headernav").style.display = "none";
            menu = false;
        }
        else {
            document.getElementById("headernav").style.display = "block";
            menu = true;
        }
    });
    document.getElementById("Login").addEventListener("click", function () {
        if (login == true) {
            document.getElementById("Loginbereich").style.display = "none";
            login = false;
        }
        else {
            document.getElementById("Loginbereich").style.display = "block";
            login = true;
        }
    });
    //AUFGABE11
    //AllBlackEverything
    var Artikel = document.getElementsByTagName("div");
    document.getElementById("ABE").addEventListener("click", function () {
        for (var i = 0; i < Artikel.length; i++) {
            var Black = Artikel[i].getElementsByClassName("Black");
            if (Black.length != 1) {
                Artikel[i].style.display = "none";
            }
        }
        ;
    });
    //AlleArtikel
    var Artikel = document.getElementsByTagName("div");
    document.getElementById("AA").addEventListener("click", function () {
        for (var i = 0; i < Artikel.length; i++) {
            if (Artikel.length != 1) {
                Artikel[i].style.display = "block";
            }
        }
        ;
    });
    //F�r den kleinen Geldbeutel
    var Artikel = document.getElementsByTagName("div");
    document.getElementById("FdkG").addEventListener("click", function () {
        for (var i = 0; i < Artikel.length; i++) {
            var Preis = Artikel[i].getElementsByClassName("Preis");
            if (Preis.length != 0) {
                var PreisAlsNummer = Number(Preis[0].innerHTML);
                if (PreisAlsNummer < 0 || PreisAlsNummer > 20) {
                    Artikel[i].style.display = "none";
                }
            }
        }
    });
});
