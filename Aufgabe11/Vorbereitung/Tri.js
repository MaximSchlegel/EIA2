var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vorbereitung11;
(function (Vorbereitung11) {
    var Tri = (function (_super) {
        __extends(Tri, _super);
        function Tri(_color) {
            _super.call(this, _color);
        }
        Tri.prototype.draw = function () {
            Vorbereitung11.crc2.fillStyle = this.color;
            Vorbereitung11.crc2.beginPath();
            Vorbereitung11.crc2.moveTo(this.x, this.y - 20);
            Vorbereitung11.crc2.lineTo(this.x + 20, this.y + 10);
            Vorbereitung11.crc2.lineTo(this.x - 20, this.y + 10);
            Vorbereitung11.crc2.closePath();
            Vorbereitung11.crc2.fill();
        };
        Tri.prototype.move = function () {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 8 - 4;
        };
        return Tri;
    }(Vorbereitung11.DavidStar));
    Vorbereitung11.Tri = Tri;
})(Vorbereitung11 || (Vorbereitung11 = {}));
//# sourceMappingURL=Tri.js.map