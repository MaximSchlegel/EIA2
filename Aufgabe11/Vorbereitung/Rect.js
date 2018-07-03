var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vorbereitung11;
(function (Vorbereitung11) {
    var Rect = (function (_super) {
        __extends(Rect, _super);
        function Rect(_color) {
            _super.call(this, _color);
        }
        Rect.prototype.draw = function () {
            Vorbereitung11.crc2.fillStyle = this.color;
            Vorbereitung11.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        };
        return Rect;
    }(Vorbereitung11.DavidStar));
    Vorbereitung11.Rect = Rect;
})(Vorbereitung11 || (Vorbereitung11 = {}));
//# sourceMappingURL=Rect.js.map