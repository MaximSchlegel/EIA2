var Aufgabe2;
(function (Aufgabe2) {
    var numPairs;
    var numPlayers = 1;
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var cardArray = [];
    function randomStatus() {
        var randomStatus = Math.random() * 11;
        if (randomStatus <= 4) {
            return "hidden";
        }
        else if (randomStatus > 4 && randomStatus <= 6) {
            return "taken";
        }
        else if (randomStatus > 6) {
            return "open";
        }
    }
    function createCard(_cardContent, _status) {
        var card = document.createElement("div");
        card.innerText = _cardContent;
        card.setAttribute("class", "card " + _status);
        cardArray.push(card);
    }
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    function main() {
        numPairs = parseInt(prompt("Anzahl der Kartenpaare", "5-8"), 10);
        if (numPairs < 5 || numPairs > 8) {
            numPairs = 8;
        }
        for (var i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomStatus());
            createCard(cardContent[i], randomStatus());
        }
        shuffleArray(cardArray);
        for (var i = 0; i < cardArray.length; i++) {
            document.getElementById("cardBox").appendChild(cardArray[i]);
        }
        var eingabeSpieler = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");
        switch (eingabeSpieler) {
            case "1":
                numPlayers += 1;
                break;
            case "2":
                numPlayers += 2;
                break;
            case "3":
                numPlayers += 3;
                break;
            case "4":
                numPlayers += 4;
                break;
            default:
                location.reload();
        }
        for (var i = 1; i < numPlayers; i++) {
            spielerDiv(i);
        }
        function spielerDiv(_numPlayers) {
            var playerDiv = document.createElement("div");
            document.getElementById("scoreboard").appendChild(playerDiv);
            var player = document.createElement("p");
            playerDiv.appendChild(player);
            player.innerHTML = "Spieler " + _numPlayers;
            var points = document.createElement("p");
            playerDiv.appendChild(points);
            points.innerHTML = "Punkte: 0";
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map