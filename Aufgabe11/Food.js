var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe11;
(function (Aufgabe11) {
    var Food = (function (_super) {
        __extends(Food, _super);
        function Food() {
            _super.call(this);
            this.border = Math.random() * (360 - 290) + 290;
        }
        Food.prototype.color = function () {
            this.r = 222;
            this.g = 184;
            this.b = 135;
        };
        Food.prototype.move = function () {
            this.y += 1;
            if (this.y > this.border) {
                this.y = this.border;
            }
        };
        Food.prototype.draw = function () {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.fill();
        };
        return Food;
    }(Aufgabe11.MovingObjects));
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Food.js.map