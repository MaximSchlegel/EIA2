/*
Abschlussaufgabe
Name: Maxim Schlegel
Matrikel: 257202
Datum: 27.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {
    export class Circle extends MovingObjects {
        // velocity (dx, dy) | radius (r) | max. radius (MaxR) | min. radius (minR)
        dx: number;
        dy: number;
        r: number;
        maxR: number;
        minR: number;
        
        constructor() {
            super();
        }

        position(): void {
            this.r = Math.random() * 10 + 2;
            this.maxR = 80;
            this.minR = this.r;
            // Circles spawn inside the canvas and can't spawn on the border
            this.x = Math.random() * (innerWidth - this.r * 2) + this.r;
            this.y = Math.random() * (innerHeight - this.r * 2) + this.r;
            // Change velocity of circles
            this.dx = (Math.random() - 0.5) * 3;
            this.dy = (Math.random() - 0.5) * 3;
        }

        move(): void {
            if (this.x + this.r > innerWidth || this.x - this.r < 0) {
                this.dx = -this.dx;
            }

            if (this.y + this.r > innerHeight || this.y - this.r < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;
        }

        // Interactivity
        mouseMove(mouseX: number, mouseY: number): void {
            if (mouseX - this.x < 70 && mouseX - this.x > - 70 && mouseY - this.y < 70 && mouseY - this.y > - 70) {
                console.log("Test");
                if (this.r < this.maxR) {
                    this.r += 1.85;
                }
            }
            else if (this.r > this.minR) {
                this.r -= 1.85;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            let grad = crc2.createLinearGradient(400, 300, 410, 480);
            grad.addColorStop(0, "#FFFACD");
            grad.addColorStop(0.5, "#F0E68C");
            grad.addColorStop(1, "#BDB76B");
            crc2.fillStyle = grad;
            crc2.fill();
            crc2.lineWidth = 3;
            crc2.strokeStyle = "black";
            crc2.stroke;
        }
    }
}