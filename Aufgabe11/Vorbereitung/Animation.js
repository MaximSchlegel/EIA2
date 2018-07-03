var Vorbereitung11;
(function (Vorbereitung11) {
    window.addEventListener("load", init);
    var stars = [];
    var n = 25;
    //let rects: Rect[] = [];
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        Vorbereitung11.crc2 = canvas.getContext("2d");
        console.log(Vorbereitung11.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (var i = 0; i < n; i++) {
            var star = new Vorbereitung11.DavidStar("#F0F8FF");
            stars.push(star);
            var rect = new Vorbereitung11.Rect("#b0C4de");
            stars.push(rect);
            var dreieck = new Vorbereitung11.Tri("#708090");
            stars.push(dreieck);
        }
        animate();
    }
    function insertNewObject(_event) {
        var mouseX = _event.clientX;
        var mouseY = _event.clientY;
        var random = Math.random() * 13;
        if (random < 5) {
            var star = new Vorbereitung11.DavidStar("#F0F8FF");
            star.x = mouseX;
            star.y = mouseY;
            stars.push(star);
        }
        else if (random < 9) {
            var rect = new Vorbereitung11.Rect("#b0C4de");
            rect.x = mouseX;
            rect.y = mouseY;
            stars.push(rect);
        }
        else {
            var dreieck = new Vorbereitung11.Tri("#708090");
            dreieck.x = mouseX;
            dreieck.y = mouseY;
            stars.push(dreieck);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Vorbereitung11.crc2.clearRect(0, 0, Vorbereitung11.crc2.canvas.width, Vorbereitung11.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Vorbereitung11 || (Vorbereitung11 = {}));
//# sourceMappingURL=Animation.js.map