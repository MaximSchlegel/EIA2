/*
Aufgabe: 10
Name: Maxim Schlegel
Matrikel: 257202
Datum: 21.06.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe10;
(function (aufgabe10) {
    var Bubbles = (function () {
        function Bubbles() {
        }
        Bubbles.prototype.move = function () {
            this.y -= 1.5;
            if (this.y < 0) {
                this.y = 460;
            }
        };
        Bubbles.prototype.draw = function () {
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            aufgabe10.crc2.fillStyle = "rgba(175,238,238, 0.25)";
            aufgabe10.crc2.fill();
            aufgabe10.crc2.closePath();
            aufgabe10.crc2.strokeStyle = "rgb(0, 0, 0)";
            aufgabe10.crc2.stroke();
        };
        return Bubbles;
    }());
    aufgabe10.Bubbles = Bubbles;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=Bubble10.js.map