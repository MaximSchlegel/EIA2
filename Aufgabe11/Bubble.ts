/*
Aufgabe: 11
Name: Maxim Schlegel
Matrikel: 257202
Datum: 01.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {
    export class Bubbles extends MovingObjects {
        r: number;
        constructor() {
            super();    
        }
        
        position(): void {
            this.x = Math.random() * (500 - 440) + 150;
            this.y = Math.random() * 460;    
        }

        color(): void {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }

        move(): void {
            this.y -= 1.5;

            if (this.y < 0) {
                this.y = 460;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            //crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")"; // "rgba(175,238,238, 0.25)";
            //crc2.fill();
            crc2.closePath();
            crc2.strokeStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.stroke();
        }
    }
}