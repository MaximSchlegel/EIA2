namespace Aufgabe4 {

    export interface Card {
        content: string[];
        color: string;
        font: string;
        amount: string;
    }

    let deck: Card;
    export interface Cards {
        [cardName: string]: Card;
    };

    export let cards: Cards = {};
    deck = {
        content: ["A", "B", "C", "D", "E", "F", "G", "H"],
        color: "red",
        font: "sans-serif",
        amount: "8"
    };
    cards["letter"] = deck;

    deck = {
        content: ["Duck", "Tiger", "Cow", "Lion", "Penguin", "Pig", "Rabbit", "Bear", "Cat", "Dog"],
        color: "blue",
        font: "serif",
        amount: "10"
    };
    cards["animal"] = deck;

    deck = {
        content: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        color: "green",
        font: "sans-serif",
        amount: "11"
    };
    cards["number"] = deck;

    export interface Scoreboard {
        player: string;
        score: number;
    }
    let scoreboard: Scoreboard[] = [];
}