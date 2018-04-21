namespace Aufgabe2 {

let numPairs: number;
let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cardArray: HTMLElement[] = [];
let cardsOpen: number = 0;
let cardsOpenArray: HTMLElement[] = [];
let checkRest: HTMLElement[] = [];
            
function createCard(_cardContent: string): void {
    let card: HTMLElement = document.createElement("div");
    card.innerHTML = "<p>" + _cardContent + "</p>";
    card.setAttribute("class", "card hidden");
    cardArray.push(card);
    checkRest.push(card);
    card.addEventListener("click", clickHandler);
}
    
function clickHandler (_event: Event): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    if (target.classList.contains("card")) {
        cardsOpen++;
        if (!(cardsOpen > 2)) {
            if (target.classList.contains("hidden")) {
                target.classList.remove("hidden");
                target.classList.add("open");
                cardsOpenArray.push(target);
            }
        }
        else if (cardsOpen == 2) {
            setTimeout(compareCards(), 2000);
        }
    }
}

function compareCards(): void {
    if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
        for (let i: number  = 0; i < 2; i++) {
            cardsOpenArray[i].classList.remove("open");
            cardsOpenArray[i].classList.add("taken");
        }
        checkRest.splice(0, 2);
        
        } else {
            for (let i: number = 0; i < cardsOpenArray.length; i++) {
            cardsOpenArray[i].classList.remove("open");
            cardsOpenArray[i].classList.add("hidden");
        }
    }
    cardsOpenArray = [];
    cardsOpen = 0;
    checkWin();
}

function checkWin(): void {
    if (checkRest.length == 0) {
        alert("Herzlichen Gl\u00fcckwunsch!");
    }
}
    
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
        createCard(cardContent[i]);
        createCard(cardContent[i]);
        }
    shuffleArray(cardArray);
    
    for (let i: number = 0; i < cardArray.length; i++) {
        document.getElementById("cardBox").appendChild(cardArray[i]);
    }     
}
document.addEventListener("DOMContentLoaded", main);
}