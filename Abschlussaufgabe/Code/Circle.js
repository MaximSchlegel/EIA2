/*
Abschlussaufgabe
Name: Maxim Schlegel
Matrikel: 257202
Datum: 27.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            _super.call(this);
        }
        Circle.prototype.position = function () {
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
        };
        // Circles are bouncing away from border
        Circle.prototype.move = function () {
            if (this.x + this.r > innerWidth || this.x - this.r < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.r > innerHeight || this.y - this.r < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        // Interactivity with mouse movement: Circles get bigger if close to the cursor
        Circle.prototype.mouseMove = function (mouseX, mouseY) {
            if (mouseX - this.x < 70 && mouseX - this.x > -70 && mouseY - this.y < 70 && mouseY - this.y > -70) {
                if (this.r < this.maxR) {
                    this.r += 2;
                }
            }
            else if (this.r > this.minR) {
                this.r -= 2;
            }
        };
        // Interactivity with touch movement: Circle get bigger if close to the touchpoint
        Circle.prototype.touchMove = function (touchX, touchY) {
            if (touchX - this.x < 200 && touchX - this.x > -200 && touchY - this.y < 200 && touchY - this.y > -200) {
                if (this.r < this.maxR) {
                    this.r += 2;
                }
            }
            else if (this.r > this.minR) {
                this.r -= 2;
            }
        };
        // Draw function for circle
        Circle.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            var grad1 = Abschlussaufgabe.crc2.createLinearGradient(400, 200, 410, 780);
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
            Abschlussaufgabe.crc2.fillStyle = grad1;
            Abschlussaufgabe.crc2.fill();
        };
        return Circle;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Circle = Circle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Circle.js.map