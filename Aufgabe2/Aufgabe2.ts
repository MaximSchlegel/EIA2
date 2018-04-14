namespace Aufgabe2 {

let numPlayer: number = 1;
let numPairs: number = 10;
let numCards: number = numPairs * 2;
let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G"];
let inputNumPlayer: string = prompt("Spielerzahl eingeben (max. 4 spieler)");

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
    
for (let i: number = 1; i< numPlayer; i++) {
    playerDiv(i);
    }
    
function playerDiv(_numPlayer: number): void {
    let playerDiv: HTMLDivElement = document.createElement("div");
    document.body.appendChild(playerDiv);
                    
    let stylePlayerBg: CSSStyleDeclaration = playerDiv.style;
    stylePlayerBg.backgroundColor = "#F2F2F2";
            
    let player: HTMLParagraphElement = document.createElement("p");
    playerDiv.appendChild(player);
    player.innerHTML = "Player " + _numPlayer;
            
    let stylePlayer: CSSStyleDeclaration = player.style;
    stylePlayer.textAlign = "center";
        
    let score: HTMLParagraphElement = document.createElement("p");
    playerDiv.appendChild(score);
    score.innerHTML = "Score: 0";
        
    let styleScore: CSSStyleDeclaration = score.style;
    styleScore.textAlign = "center";
    }
}