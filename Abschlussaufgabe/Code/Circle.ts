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
            // Random radius of circles with minimum and maximum radius
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

        // Circles are bouncing away from border
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
 
        // Interactivity with mouse movement: Circles get bigger if close to the cursor
        mouseMove(mouseX: number, mouseY: number): void {
            if (mouseX - this.x < 70 && mouseX - this.x > - 70 && mouseY - this.y < 70 && mouseY - this.y > - 70) {
                if (this.r < this.maxR) {
                    this.r += 2;
                }
            }
            else if (this.r > this.minR) {
                this.r -= 2;
            }
        }

        // Interactivity with touch movement: Circle get bigger if close to touchpoint
        touchMove(touchX: number, touchY: number): void {
            if (touchX - this.x < 120 && touchX - this.x > - 120 && touchY - this.y < 120 && touchY - this.y > - 120) {
                if (this.r < this.maxR) {
                    this.r += 2;
                }
            }
            else if (this.r > this.minR) {
                this.r -= 2;
            }
        }
        
        // Draw function for circle
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);

            let grad1 = crc2.createLinearGradient(400, 200, 410, 780);
            grad1.addColorStop(0, "#FFFACD");
            grad1.addColorStop(0.5, "#F0E68C");
            grad1.addColorStop(1, "#BDB76B");

            // Alternative gradients I tried out (first one still the best)
            /*let grad2 = crc2.createLinearGradient(440, 250, 450, 430);
            grad2.addColorStop(0, "#F2C5CA");
            grad2.addColorStop(0.5, "#F1A9BB");
            grad2.addColorStop(1, "#DB86A9");
            
            let grad3 = crc2.createLinearGradient(640, 150, 650, 700);
            grad3.addColorStop(0, "#B5D3DB");
            grad3.addColorStop(0.5, "#5A8DAB");
            grad3.addColorStop(1, "#283143");*/

            crc2.fillStyle = grad1;
            crc2.fill();
        }
    }
}