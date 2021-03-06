/*
Aufgabe: 11
Name: Maxim Schlegel
Matrikel: 257202
Datum: 01.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {
    export class Food extends MovingObjects {
        border: number;

        constructor() {
            super();
            this.border = Math.random() * (360 - 335    ) + 430;
        }

        color(): void {
            this.r = 222;
            this.g = 184;
            this.b = 135;
        }

        move(): void {
            this.y += 1;
            
            if (this.y > this.border) {
                this.y = this.border;    
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.fill();
            crc2.stroke();
        }
    }
}