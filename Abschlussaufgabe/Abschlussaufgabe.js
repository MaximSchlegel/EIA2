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
    var mouseMov = [];
    // Init function
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        // Canvas size = Window size
        Abschlussaufgabe.crc2.canvas.width = window.innerWidth;
        Abschlussaufgabe.crc2.canvas.height = window.innerHeight;
        // Generate circles
        for (var i = 0; i < 250; i++) {
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
    window.addEventListener("mousemove", function (event) {
        var mouseX = event.screenX;
        var mouseY = event.screenY;
        mouseX = event.x;
        mouseY = event.y;
        //console.log("X: " + mouseX);
        //console.log("Y: " + mouseY);
    });
    console.log(objects);
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussaufgabe.js.map