/*
Aufgabe: 3
Name: Maxim Schlegel
Matrikel: 257202
Datum: 19.04.18
    
Hiermit versichere ich, dass ich diesen Code (in cooperation mit Daniel Kern) geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe3;
(function (Aufgabe3) {
    var numPairs;
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var cardArray = [];
    var cardsOpen = 0;
    var cardsOpenArray = [];
    var checkRest = [];
    function createCard(_cardContent) {
        var card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
        var target = _event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2)) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    function compareCards() {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (var i = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        }
        else {
            for (var i = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }
    function checkWin() {
        if (checkRest.length == 0) {
            alert("Herzlichen Gl\u00fcckwunsch!");
        }
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
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }
        shuffleArray(cardArray);
        for (var i = 0; i < cardArray.length; i++) {
            document.getElementById("cardBox").appendChild(cardArray[i]);
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Aufgabe3.js.map