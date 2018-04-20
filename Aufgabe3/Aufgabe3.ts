namespace Aufgabe2 {

let numPairs: number;
let numPlayers: number = 1;
let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cardArray: HTMLElement[] = [];
let cardOpenArray: HTMLElement[] = [];
let status: string = "hidden";
let cardsOpen: number = 0;

            
function createCard(_cardContent: string, _status: string): void {
    let card: HTMLElement = document.createElement("div");
    card.innerHTML = "<p>" + _cardContent + "</p>";
    card.setAttribute("class", "card hidden");
    cardArray.push(card);
    card.addEventListener("click", clickHandler);
}
    
function clickHandler (_event: Event): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    if (target.classList.contains("card")) {
        cardsOpen++;
        if (cardsOpen <= 2) {
            if (target.classList.contains("hidden")) {
                target.classList.remove("hidden");
                target.classList.add("open");
            }
        }
        else if (cardsOpen == 2) {
            setTimeout(compareCards(), 2000);
        }
    }
}

function compareCards(): void {
    for (let i: number  = 0; i < 2; i++) {
        if (cardOpenArray[0].innerHTML == cardOpenArray[1].innerHTML) {
            cardOpenArray[i].classList.remove("hidden");
            cardOpenArray[i].classList.add("taken");
        }
        else {
            cardOpenArray[i].classList.remove("open");
            cardOpenArray[i].classList.add("hidden");
        }
    }
}
console.log(cardOpenArray);
    
function shuffleArray(_array: any[]): any[] {
    for (var i: number = _array.length - 1; i > 0; i--) {
        var j: number = Math.floor(Math.random() * (i + 1));
        var temp: number = _array[i];
        _array[i] = _array[j];
        _array[j] = temp;
        }
    return _array;
}

function main(): void {
    numPairs = parseInt(prompt("Anzahl der Kartenpaare", "5-8"), 10);
    if (numPairs < 5 || numPairs > 8) { 
        numPairs = 8;
        }
    
    for (let i: number = 0; i < numPairs; i++) {
        createCard(cardContent[i], status);
        createCard(cardContent[i], status);
        }
    shuffleArray(cardArray);
    
    for (let i: number = 0; i < cardArray.length; i++) {
        document.getElementById("cardBox").appendChild(cardArray[i]);
    }     
}
document.addEventListener("DOMContentLoaded", main);
}