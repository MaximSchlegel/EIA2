namespace Aufgabe2 {

let numPairs: number;
let numPlayers: number = 1;
let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cardArray: HTMLElement[] = [];
            
function randomStatus(): string {
    let randomStatus: number = Math.random() * 11;
                
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

         
function createCard(_cardContent: string, _status: string): void {
    let card: HTMLElement = document.createElement("div");
    card.innerText = _cardContent;
    card.setAttribute("class", "card " + _status);
    cardArray.push(card); 
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
        createCard(cardContent[i], randomStatus());
        createCard(cardContent[i], randomStatus());
        }
    shuffleArray(cardArray);
    
    for (let i: number = 0; i < cardArray.length; i++) {
        document.getElementById("cardBox").appendChild(cardArray[i]);
    }
    
    let eingabeSpieler: string = prompt("Spieleranzahl eingeben (max. 4 Spieler)" + "");
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
            
    for ( let i: number = 1; i < numPlayers; i++) {
        spielerDiv(i);
        }     
            
    function spielerDiv(_numPlayers: number): void {
        let playerDiv: HTMLDivElement = document.createElement("div");
        document.getElementById("scoreboard").appendChild(playerDiv);
                  
        let player: HTMLParagraphElement = document.createElement("p");
        playerDiv.appendChild(player);
        player.innerHTML = "Spieler " + _numPlayers;
                
        let points: HTMLParagraphElement = document.createElement("p");
        playerDiv.appendChild(points);
        points.innerHTML = "Punkte: 0";  
        } 
    }
document.addEventListener("DOMContentLoaded", main);
}