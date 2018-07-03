var Vorbereitung11;
(function (Vorbereitung11) {
    var DavidStar = (function () {
        function DavidStar(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        DavidStar.prototype.setRandomPosition = function () {
            this.x = Math.random() * Vorbereitung11.crc2.canvas.width;
            this.y = Math.random() * Vorbereitung11.crc2.canvas.height;
        };
        // declare method without keyword function
        DavidStar.prototype.move = function () {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        };
        DavidStar.prototype.draw = function () {
            Vorbereitung11.crc2.beginPath();
            Vorbereitung11.crc2.moveTo(this.x, this.y - 20);
            Vorbereitung11.crc2.lineTo(this.x + 20, this.y + 10);
            Vorbereitung11.crc2.lineTo(this.x - 20, this.y + 10);
            Vorbereitung11.crc2.closePath();
            Vorbereitung11.crc2.moveTo(this.x, this.y + 20);
            Vorbereitung11.crc2.lineTo(this.x + 20, this.y - 10);
            Vorbereitung11.crc2.lineTo(this.x - 20, this.y - 10);
            Vorbereitung11.crc2.closePath();
            Vorbereitung11.crc2.fillStyle = this.color;
            Vorbereitung11.crc2.stroke();
            Vorbereitung11.crc2.fill();
        };
        return DavidStar;
    }());
    Vorbereitung11.DavidStar = DavidStar;
})(Vorbereitung11 || (Vorbereitung11 = {}));
//# sourceMappingURL=DavidStar.js.map