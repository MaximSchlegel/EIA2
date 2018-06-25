/*
Aufgabe: 10
Name: Maxim Schlegel
Matrikel: 257202
Datum: 21.06.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe10 {
 
    export class Bubbles {
        x: number;
        y: number;
        r: number;

        move(): void {
            this.y -= 1.5;

            if (this.y < 0) {
                this.y = 460;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc2.fillStyle = "rgba(175,238,238, 0.25)";
            crc2.fill();
            crc2.closePath();
            crc2.strokeStyle = "rgb(0, 0, 0)";
            crc2.stroke();
        }
    }
}