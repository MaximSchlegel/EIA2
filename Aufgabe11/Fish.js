/*
Aufgabe: 11
Name: Maxim Schlegel
Matrikel: 257202
Datum: 01.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe11;
(function (Aufgabe11) {
    var Fish = (function (_super) {
        __extends(Fish, _super);
        function Fish() {
            _super.call(this);
        }
        Fish.prototype.position = function () {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * 200;
        };
        Fish.prototype.color = function () {
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        };
        Fish.prototype.move = function () {
            this.x += 1.2;
            if (this.x > 860) {
                this.x = -150;
            }
        };
        Fish.prototype.draw = function () {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x + 120, this.y + 110, this.x + 130, this.y + -70, this.x, this.y + 40);
            Aufgabe11.crc2.lineTo(this.x, this.y);
            Aufgabe11.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        };
        return Fish;
    }(Aufgabe11.MovingObjects));
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Fish.js.map