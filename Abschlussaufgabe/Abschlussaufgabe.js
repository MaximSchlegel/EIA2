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
    window.addEventListener("touchmove", touchMove);
    var objects = [];
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
    }
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
    // Track mouse movement
    window.addEventListener("mousemove", function (event) {
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
    function touchMove() {
    }
    /*window.addEventListener("touchmove", function(touchEvent) {
        let touchX: number = event.screenX;
        let touchY: number = event.screenY;
        touchX = event.x;
        touchY = event.y;
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].mouseMove(touchX, touchY);
        }
        console.log("X: " + touchX);
        console.log("Y: " + touchY);
    });*/
    // Adjusts canvas even after resizing your window
    window.addEventListener("resize", function (event) {
        Abschlussaufgabe.crc2.canvas.width = window.innerWidth;
        Abschlussaufgabe.crc2.canvas.height = window.innerHeight;
    });
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussaufgabe.js.map