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
    var Bubbles = (function (_super) {
        __extends(Bubbles, _super);
        function Bubbles() {
            _super.call(this);
        }
        Bubbles.prototype.position = function () {
            this.x = Math.random() * (500 - 440) + 150;
            this.y = Math.random() * 460;
        };
        Bubbles.prototype.color = function () {
            this.r = 0;
            this.g = 0;
            this.b = 0;
        };
        Bubbles.prototype.move = function () {
            this.y -= 1.5;
            if (this.y < 0) {
                this.y = 460;
            }
        };
        Bubbles.prototype.draw = function () {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            //crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")"; // "rgba(175,238,238, 0.25)";
            //crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.strokeStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.stroke();
        };
        return Bubbles;
    }(Aufgabe11.MovingObjects));
    Aufgabe11.Bubbles = Bubbles;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubble.js.map