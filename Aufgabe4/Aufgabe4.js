/*
Aufgabe: 4
Name: Maxim Schlegel
Matrikel: 257202
Datum: 03.05.18
    
Hiermit versichere ich, dass ich diesen Code (in cooperation mit Daniel Kern) geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", main);
    var playerCounter = 1;
    var sliderAmount = 1;
    var playerPoints = 0;
    var cardArray = [];
    var cardsOpen = 0;
    var cardsOpenArray = [];
    var checkRest = [];
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addPlayer").addEventListener("click", addPlayer);
        document.getElementById("removePlayer").addEventListener("click", removePlayer);
        document.getElementById("sliderNumPair").addEventListener("change", createSlider);
    }
    function addPlayer() {
        if (playerCounter < 4) {
            var player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Player name");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("id", "player");
            document.getElementById("playerName").appendChild(player);
            playerCounter++;
        }
    }
    function removePlayer() {
        document.getElementById("player").remove();
        playerCounter--;
    }
    function createSlider() {
        if (sliderAmount == 1) {
            var slider = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("value", "5");
            slider.setAttribute("min", "5");
            slider.setAttribute("max", Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].amount);
            slider.setAttribute("step", "1");
            slider.setAttribute("id", "slider");
            document.getElementById("sliderbox").appendChild(slider);
            sliderAmount++;
            var sliderValue_1 = document.createElement("p");
            sliderValue_1.setAttribute("id", "sliderValue");
            sliderValue_1.innerText = "Card pairs: " + document.getElementById("slider").value;
            slider.oninput = function () {
                sliderValue_1.innerText = "Card pairs: " + this.value;
            };
            document.getElementById("sliderbox").appendChild(sliderValue_1);
        }
        else {
            sliderUpdate();
        }
    }
    function sliderUpdate() {
        document.getElementById("slider").remove();
        document.getElementById("sliderValue").remove();
        sliderAmount--;
        createSlider();
    }
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
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                window.setTimeout(compareCards, 2000);
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
            alert("Congratulation!");
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
    function start() {
        document.getElementById("startMenu").style.display = "none";
        document.getElementById("scoreboard").style.display = "block";
        document.getElementById("game").style.display = "block";
        var inputs = document.getElementsByTagName("input");
        var numPairs = parseInt(document.getElementById("slider").value);
        for (var i = 0; i < playerCounter; i++) {
            var playerDiv = document.createElement("div");
            document.getElementById("scoreboard").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerPoints + " Points";
        }
        for (var i = 0; i < numPairs; i++) {
            createCard(Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].content[i]);
            createCard(Aufgabe4.cards[document.getElementsByTagName("select").item(0).value].content[i]);
        }
        shuffleArray(cardArray);
        for (var i = 0; i < cardArray.length; i++) {
            document.getElementById("cardBox").appendChild(cardArray[i]);
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map