var Aufgabe_2;
(function (Aufgabe_2) {
    window.addEventListener("load", init);
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    let cardArray = [];
    let randomCardContent = [];
    let askPairs;
    let numPairs = parseInt(askPairs);
    let askPlayers;
    let numPlayers = parseInt(askPlayers);
    let card = document.createElement("div");
    let cssClassHidden = ["hidden"];
    let cssClassOpen = ["open"];
    let cssClassOpenString = "open";
    let openCards = [];
    let playerArray = [];
    let inputs = document.getElementsByTagName("input");
    function init() {
        console.log("Init");
        hideMemory();
        //addPlayerButton();
        let addPlayerButton = document.getElementById("addPlayerButton");
        addPlayerButton.addEventListener("click", addPlayer);
        //removePlayer
        let removePlayerButton = document.getElementById("removePlayerButton");
        addPlayerButton.addEventListener("click", removePlayer);
        //start game
        let startButton = document.getElementById("startButton");
        startButton.addEventListener("click", startGame);
    }
    function startGame() {
        //show game
        document.getElementById("playground").classList.add("open");
        document.getElementById("player").classList.add("open");
        //hide interface
        //     document.getElementById("playernames").classList.add("taken");
        document.getElementById("deck").classList.add("taken");
        document.getElementById("pairs").classList.add("taken");
        document.getElementById("start").classList.add("taken");
        document.getElementById("removePlayerButton").classList.add("taken");
        document.getElementById("addPlayerButton").classList.add("taken");
        generateContent();
        createCards(numPairs, cardArray, cardContent);
    }
    function addPlayer() {
        //let input: HTMLInputElement = <HTMLInputElement>document.getElementById("addPlayer");
        let input = document.createElement("input");
        input.classList.add("player");
        document.getElementById("playernames").appendChild(input);
        playerArray.push(input);
        console.log(playerArray);
    }
    function removePlayer() {
        let inputs = document.getElementsByTagName("input");
        let fieldset = document.getElementById("interface");
        console.log(fieldset);
        //gef�hlt alle Varianten probiert, aber komme nicht an das letzte Input/Child vom ersten Fieldset ran
    }
    function createStepper() {
    }
    /*Asking how many Pairs + Check if it's in range + if it's a number
        do  {
        askPairs = prompt ("Wie viele Paare?");
        numPairs = parseInt(askPairs);
        
        } while (numPairs < 1 || numPairs > 20 || isNaN(numPairs));
         
    /*    do  {
        askPairs = prompt ("Wie viele Paare?");
        numPairs = parseInt(askPairs);
        
        } while (isNaN(numPairs) || isNaN(numPairs));
    
       Gebe ich zuerst eine falsche Nummer oder einen String ein funktionieren beide Abfragen.
       Nach der String-Test kann ich aber auch Zahlen au�erhalb der Range eingeben und er springt weiter.
       Ich bin mir ziemlich sicher, dass es daran liegt, dass die Abfragen in 2 versch. Schleifen stattfinden.
       Wenn ich beide Abfragen in eine Schleife gepackt habe, habe ich es aber nicht zum Laufen gebracht.*/
    /*Asking how many Players + Check if it's in range + if it's a number
        do  {
        askPlayers = prompt ("Wie viele Spieler?");
        numPlayers = parseInt(askPlayers);
        
        } while (numPlayers < 1 || numPlayers > 4 || isNaN(numPlayers));
         
    /*    do  {
        askPlayers = prompt ("Wie viele Spieler?");
        numPlayers = parseInt(askPlayers);
        
        } while (isNaN(numPlayers) || isNaN(numPlayers));
           
        console.log(askPlayers);
        console.log(askPairs);
        
        //createCard(cardContent, "#ff0000");
            
          */
    //HAUPTPROGRAMM
    /*hideMemory();
    generateContent();
    createPlayer();
    createCards(numPairs, cardArray, cardContent);*/
    function hideMemory() {
        document.getElementById("playground").classList.add("taken");
        document.getElementById("player").classList.add("taken");
    }
    /*   function createPlayer(): void {
           
           //let player: HTMLDivElement = document.createElement("div");
           let player: any = document.getElementsByClassName("player");
           console.log(player);
           let playerArray: string [] = [];
           let div: HTMLDivElement = document.createElement("div");
           playerArray.push(player.toString);
           
           for (let i: number = 0; i < player[0]++; i++) {
           
           
           div.innerText = "Name: " + player[i];
           document.getElementById("player").appendChild(div);
   
       }
   }*/
    function createCards(_numPairs, _cardArray, _content) {
        for (let i = 0; i < _numPairs * 2; i++) {
            let card = document.createElement("div");
            document.getElementById("playground").appendChild(card);
            card.addEventListener("click", clickHandler);
            card.className = "hidden";
            let randomContent = Math.floor(Math.random() * (randomCardContent.length - 1) + 0);
            card.innerText = randomCardContent[randomContent];
            cardArray.push(randomCardContent[randomContent]);
            randomCardContent.splice(randomContent, 1);
        }
    }
    function generateContent() {
        for (let i = 0; i < numPairs; i++) {
            let randomContent = Math.floor(Math.random() * (cardContent.length - 1) + 0);
            randomCardContent.push(cardContent[randomContent]);
            randomCardContent.push(cardContent[randomContent]);
            cardContent.splice(randomContent, 1);
            console.log(cardContent);
        }
    }
    function compareCards() {
        //    let card1: HTMLElement = document.getElementsByClassName("open")[0];
        if (openCards[0].children == openCards[1].children) {
            openCards.splice(0, 1);
        }
        if (openCards[0].innerHTML == openCards[1].innerHTML) {
            setTimeout(timeWasteTrue, 2000);
        }
        else {
            setTimeout(timeWasteFalse, 2000);
        }
    }
    function lastCheck() {
        //        if (document.getElementsByClassName("hidden").length == 0) {
        if (document.getElementById("playground").getElementsByTagName("div").length == document.getElementsByClassName("taken").length) {
            alert("Du hast gewonnen!");
        }
    }
    function timeWasteTrue() {
        openCards[0].classList.add("taken");
        openCards[1].classList.add("taken");
        /*    openCards[0].classList.remove("open");
            openCards[1].classList.remove("open");
            openCards[0].classList.remove("hidden");
            openCards[1].classList.remove("hidden");*/
        openCards.splice(0, 2);
        lastCheck();
    }
    function timeWasteFalse() {
        openCards[0].classList.remove("open");
        openCards[1].classList.remove("open");
        openCards.splice(0, 2);
    }
    // for (let i: number = 0; i < cardArray.length; i++) {
    //       let randomStatus: number = Math.floor(Math.random() * (cssClassHidden.length - 0) + 0);
    //   let status: string = cssClassHidden[0];
    //   createCard(cardArray, randomContent, status);
    //        }
    /*        function randomContent(_min: number, _max: number): void {
            _min = 0;
            _max = cardArray.length;
            Math.floor(Math.random() * (_max - _min + 1) + _min);
        }
        
            function randomStatus(_min: number, _max: number): void {
            _min = 0;
            _max = cssClasses.length;
            Math.floor(Math.random() * (_max - _min + 1) + _min);
        }
    */
    /*
        function createCard(_content: string[], _randomContent: number, _status: string): void {
        for (let i: number = 0; i < numPairs; i++) {
        let card: HTMLDivElement = document.createElement("div");
            
            
        card.innerText = _content[_randomContent];
            
        card.className = _status;
        
        document.getElementById("playground").appendChild(card);
        
        card.addEventListener("click", clickHandler);
        }
    }  */
    function clickHandler(_event) {
        let info = _event.target;
        if (info.classList.contains("hidden")) {
            info.classList.add("open");
            openCards.push(info);
        }
        cardArray.push();
        console.log(cardArray);
        console.log("Open Cards" + openCards);
        if (openCards.length > 1) {
            compareCards();
        }
        lastCheck();
        logEvent(_event);
        //        logEvent(_event);
        //      card.className = cssClassOpen [0];
    }
    function logEvent(_event) {
        if (_event == undefined) {
            console.log("No event object passed");
            return;
        }
        console.group("EventInfo");
        let info = "Type: " + _event.type;
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info);
        console.log(_event);
        console.groupEnd();
    }
})(Aufgabe_2 || (Aufgabe_2 = {}));
;
