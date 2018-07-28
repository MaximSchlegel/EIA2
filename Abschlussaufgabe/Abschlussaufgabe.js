/*
Abschlussaufgabe
Name: Maxim Schlegel
Matrikel: 257202
Datum: 27.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var objects = [];
    //  let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    // Init function
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        // Canvas size = Window size
        Abschlussaufgabe.crc2.canvas.width = window.innerWidth;
        Abschlussaufgabe.crc2.canvas.height = window.innerHeight;
        // Generate circles
        for (var i = 0; i < 700; i++) {
            var circle = new Abschlussaufgabe.Circle();
            objects.push(circle);
        }
        animate();
        // Track mouse movement
        canvas.addEventListener("mousemove", function (event) {
            var mouseX = event.screenX;
            var mouseY = event.screenY;
            mouseX = event.x;
            mouseY = event.y;
            for (var i = 0; i < objects.length; i++) {
                objects[i].mouseMove(mouseX, mouseY);
            }
            //console.log("X: " + mouseX);
            //console.log("Y: " + mouseY);
        });
        // Track touch movement
        canvas.addEventListener("touchmove", function (event) {
            var touchX = event.changedTouches[0].screenX;
            var touchY = event.changedTouches[0].screenY;
            //touchX = event.changedTouches[0].x;
            //touchY = event.changedTouches[0].y;
            for (var i = 0; i < objects.length; i++) {
                objects[i].touchMove(touchX, touchY);
            }
            //console.log("X: " + mouseX);
            //console.log("Y: " + mouseY);
        });
        // Animate Circles
        function animate() {
            requestAnimationFrame(animate);
            Abschlussaufgabe.crc2.clearRect(0, 0, innerWidth, innerHeight);
            for (var i = 0; i < objects.length; i++) {
                objects[i].move();
            }
            for (var i = 0; i < objects.length; i++) {
                objects[i].draw();
            }
        }
        // Adjusts canvas even after resizing your window
        window.addEventListener("resize", function (event) {
            Abschlussaufgabe.crc2.canvas.width = window.innerWidth;
            Abschlussaufgabe.crc2.canvas.height = window.innerHeight;
        });
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussaufgabe.js.map