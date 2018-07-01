/*
Aufgabe: 11
Name: Maxim Schlegel
Matrikel: 257202
Datum: 01.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {
    export class Fish extends MovingObjects {
        constructor() {
            super();
        }

        position(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * 200;    
        }

        color(): void {
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        
        move(): void {
            this.x += 1.2;

            if (this.x > 860) {
                this.x = -150;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 120, this.y + 110, this.x + 130, this.y + -70, this.x, this.y + 40);
            crc2.lineTo(this.x, this.y);
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
}