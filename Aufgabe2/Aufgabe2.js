var Aufgabe2;
(function (Aufgabe2_1) {
    var Aufgabe2;
    (function (Aufgabe2) {
        var numPairs;
        var numPlayers = 1;
        var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H"];
        var cardArray = [];
        var Card = (function () {
            function Card(_cardContent) {
                this.cardContent = _cardContent;
                var randomStatus = Math.random() * 11;
                if (randomStatus <= 4) {
                    this.cardStatus = "hidden";
                }
                else if (randomStatus > 4 && randomStatus <= 6) {
                    this.cardStatus = "taken";
                }
                else if (randomStatus > 6) {
                    this.cardStatus = "open";
                }
            }
            Card.prototype.createCard = function () {
                this.card = document.createElement("div");
                this.card.innerText = this.cardContent;
                this.card.setAttribute("class", "card " + this.cardStatus);
                cardArray.push(this.card);
                return cardArray;
            };
            return Card;
        }());
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
            numPairs = parseInt(prompt("How many card pairs?", "5-8"), 10);
            if (numPairs < 5 || numPairs > 8) {
                numPairs = 8;
            }
            for (var i = 0; i < numPairs; i++) {
                var card = new Card(cardContent[i]);
                card.createCard();
                var pair = new Card(cardContent[i]);
                pair.createCard();
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
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map