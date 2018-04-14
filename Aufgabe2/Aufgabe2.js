var Aufgabe2;
(function (Aufgabe2) {
    var numPlayer = 1;
    var numPairs = 10;
    var numCards = numPairs * 2;
    var cardContent = ["A", "B", "C", "D", "E", "F", "G"];
    var inputNumPlayer = prompt("Spielerzahl eingeben (max. 4 spieler)");
    switch (inputNumPlayer) {
        case "1":
            numPlayer += 1;
            break;
        case "2":
            numPlayer += 2;
            break;
        case "3":
            numPlayer += 3;
            break;
        case "4":
            numPlayer += 4;
            break;
        default:
            location.reload();
    }
    for (var i = 1; i < numPlayer; i++) {
        playerDiv(i);
    }
    function playerDiv(_numPlayer) {
        var playerDiv = document.createElement("div");
        document.body.appendChild(playerDiv);
        var stylePlayerBg = playerDiv.style;
        stylePlayerBg.backgroundColor = "#F2F2F2";
        var player = document.createElement("p");
        playerDiv.appendChild(player);
        player.innerHTML = "Player " + _numPlayer;
        var stylePlayer = player.style;
        stylePlayer.textAlign = "center";
        var score = document.createElement("p");
        playerDiv.appendChild(score);
        score.innerHTML = "Score: 0";
        var styleScore = score.style;
        styleScore.textAlign = "center";
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map