var Aufgabe4;
(function (Aufgabe4) {
    var deck;
    ;
    Aufgabe4.cards = {};
    deck = {
        content: ["A", "B", "C", "D", "E", "F", "G", "H"],
        color: "red",
        font: "sans-serif",
        amount: "8"
    };
    Aufgabe4.cards["letter"] = deck;
    deck = {
        content: ["Duck", "Tiger", "Cow", "Lion", "Penguin", "Pig", "Rabbit", "Bear", "Cat", "Dog"],
        color: "blue",
        font: "serif",
        amount: "10"
    };
    Aufgabe4.cards["animal"] = deck;
    deck = {
        content: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        color: "green",
        font: "sans-serif",
        amount: "11"
    };
    Aufgabe4.cards["number"] = deck;
    var scoreboard = [];
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Interface4.js.map