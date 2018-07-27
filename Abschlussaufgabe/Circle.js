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
            this.r = Math.random() * 8 + 3;
            this.maxR = 40;
            this.minR = 5;
            // Circles spawn inside the canvas and can't spawn on the border
            this.x = Math.random() * (innerWidth - this.r * 2) + this.r;
            this.y = Math.random() * (innerHeight - this.r * 2) + this.r;
            // Change velocity of circles
            this.dx = (Math.random() - 0.5) * 2;
            this.dy = (Math.random() - 0.5) * 2;
        };
        Circle.prototype.move = function () {
            if (this.x + this.r > innerWidth || this.x - this.r < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.r > innerHeight || this.y - this.r < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            // Interactivity
            if (this.mouseX - this.x < 50 && this.mouseX - this.x > -50 && this.mouseY - this.y < 50 && this.mouseY - this.y > -50) {
                if (this.maxR < 40) {
                    this.r += 1;
                }
            }
            else if (this.r > this.minR) {
                this.r -= 1;
            }
            //console.log("X: " + this.mouseX);
            //console.log("Y: " + this.mouseY);
        };
        Circle.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            var grad = Abschlussaufgabe.crc2.createLinearGradient(400, 300, 410, 480);
            grad.addColorStop(0, "#FFFACD");
            grad.addColorStop(0.5, "#F0E68C");
            grad.addColorStop(1, "#BDB76B");
            Abschlussaufgabe.crc2.lineWidth = 2;
            Abschlussaufgabe.crc2.strokeStyle = grad;
            Abschlussaufgabe.crc2.stroke();
        };
        return Circle;
    }(Abschlussaufgabe.MovingObjects));
    Abschlussaufgabe.Circle = Circle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Circle.js.map