/*
Aufgabe: 10
Name: Maxim Schlegel
Matrikel: 257202
Datum: 21.06.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe10;
(function (aufgabe10) {
    window.addEventListener("load", init);
    var fishArray = [];
    var bubbleArray = [];
    var n = 12;
    var imagedata;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        aufgabe10.crc2 = canvas.getContext("2d");
        drawWater(0, 0);
        drawGround();
        drawChest(670, 350);
        drawGras1(100, 460);
        drawGras2(100, 260);
        drawGras1(600, 460);
        drawGras3(620, 460);
        drawGras2(560, 260);
        drawGras3(620, 530);
        drawGras3(360, 550);
        drawGras2(300, 370);
        drawGras3(850, 460);
        imagedata = aufgabe10.crc2.getImageData(0, 0, 840, 460);
        for (var i = 0; i < n; i++) {
            var fish = new aufgabe10.Fish();
            fish.x = Math.random() * aufgabe10.crc2.canvas.width;
            fish.y = Math.random() * 200;
            fish.r = Math.random() * 255;
            fish.g = Math.random() * 255;
            fish.b = Math.random() * 255;
            fishArray.push(fish);
        }
        for (var i = 0; i < n - 2; i++) {
            var bubble = new aufgabe10.Bubbles();
            bubble.x = Math.random() * (500 - 440) + 150;
            bubble.y = Math.random() * 460;
            bubble.r = Math.random() * 15;
            bubbleArray.push(bubble);
        }
        for (var i = 0; i < n - 2; i++) {
            var bubble = new aufgabe10.Bubbles();
            bubble.x = Math.random() * (500 - 440) + 620;
            bubble.y = Math.random() * 400;
            bubble.r = Math.random() * 18;
            bubbleArray.push(bubble);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        aufgabe10.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
    }
    function moveFishes() {
        for (var i = 0; i < fishArray.length; i++) {
            fishArray[i].move();
        }
    }
    function drawFishes() {
        for (var i = 0; i < fishArray.length; i++)
            fishArray[i].draw();
    }
    function moveBubbles() {
        for (var i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].move();
        }
    }
    function drawBubbles() {
        for (var i = 0; i < bubbleArray.length; i++)
            bubbleArray[i].draw();
    }
    function drawGras1(_x, _y) {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(_x, _y);
        aufgabe10.crc2.quadraticCurveTo(_x - 90, _y - 160, _x + 30, _y - 150);
        aufgabe10.crc2.quadraticCurveTo(_x - 50, _y - 140, _x + 20, _y);
        aufgabe10.crc2.lineTo(_x, _y);
        aufgabe10.crc2.fillStyle = "#9aCd32";
        aufgabe10.crc2.fill();
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.stroke();
    }
    function drawGras2(_x, _y) {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(_x, _y);
        aufgabe10.crc2.bezierCurveTo(_x + 40, _y + 10, _x + 80, _y + 40, _x, _y + 200);
        aufgabe10.crc2.lineTo(_x + 50, _y + 200);
        aufgabe10.crc2.bezierCurveTo(_x + 20, _y + 150, _x + 120, _y + 10, _x, _y);
        aufgabe10.crc2.fillStyle = "#6B8e23";
        aufgabe10.crc2.fill();
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.stroke();
    }
    function drawGras3(_x, _y) {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(_x, _y);
        aufgabe10.crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 60, _y - 140);
        aufgabe10.crc2.quadraticCurveTo(_x - 40, _y - 150, _x - 20, _y);
        aufgabe10.crc2.lineTo(_x, _y);
        aufgabe10.crc2.fillStyle = "#2E8B57";
        aufgabe10.crc2.fill();
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.stroke();
    }
    function drawChest(_x, _y) {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(_x, _y);
        aufgabe10.crc2.lineTo(_x, _y + 50);
        aufgabe10.crc2.lineTo(_x + 50, _y + 35);
        aufgabe10.crc2.lineTo(_x + 50, _y - 15);
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.moveTo(_x + 50, _y - 15);
        aufgabe10.crc2.lineTo(_x + 130, _y + 10);
        aufgabe10.crc2.lineTo(_x + 130, _y + 70);
        aufgabe10.crc2.lineTo(_x + 50, _y + 35);
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.moveTo(_x + 50, _y - 15);
        aufgabe10.crc2.lineTo(_x + 25, _y - 60);
        aufgabe10.crc2.lineTo(_x + 115, _y - 35);
        aufgabe10.crc2.lineTo(_x + 130, _y + 10);
        aufgabe10.crc2.fillStyle = "rgb(96, 56, 19)";
        aufgabe10.crc2.fill();
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.stroke();
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(_x, _y);
        aufgabe10.crc2.lineTo(_x, _y + 50);
        aufgabe10.crc2.lineTo(_x + 85, _y + 105);
        aufgabe10.crc2.lineTo(_x + 85, _y + 40);
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.moveTo(_x + 85, _y + 105);
        aufgabe10.crc2.lineTo(_x + 130, _y + 70);
        aufgabe10.crc2.lineTo(_x + 130, _y + 10);
        aufgabe10.crc2.lineTo(_x + 85, _y + 40);
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.moveTo(_x + 115, _y - 35);
        aufgabe10.crc2.lineTo(_x + 130, _y + 10);
        aufgabe10.crc2.bezierCurveTo(_x + 150, _y + 10, _x + 140, _y + -60, _x + 115, _y - 35);
        aufgabe10.crc2.moveTo(_x + 25, _y - 60);
        aufgabe10.crc2.lineTo(_x + 115, _y - 35);
        aufgabe10.crc2.lineTo(_x + 126, _y - 42);
        aufgabe10.crc2.bezierCurveTo(_x - 10, _y - 90, _x + 35, _y + -50, _x + 25, _y - 60);
        aufgabe10.crc2.fillStyle = "rgb(140, 98, 57)";
        aufgabe10.crc2.fill();
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.stroke();
    }
    function drawWater(_x, _y) {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.lineTo(0, 460);
        aufgabe10.crc2.lineTo(840, 460);
        aufgabe10.crc2.lineTo(840, 0);
        aufgabe10.crc2.lineTo(0, 0);
        var grad = aufgabe10.crc2.createLinearGradient(400, 100, 360, 400);
        grad.addColorStop(0, "#E0FFFF");
        grad.addColorStop(0.5, "#aFEEEE");
        grad.addColorStop(1, "#5F9ea0");
        aufgabe10.crc2.fillStyle = grad;
        aufgabe10.crc2.fill();
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.stroke();
    }
    function drawGround() {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(0, 460);
        aufgabe10.crc2.lineTo(0, 150);
        for (var i = 0; i < 840; i++) {
            aufgabe10.crc2.lineTo(i, 20 * Math.sin(i * .015) + 325);
        }
        aufgabe10.crc2.lineTo(840, 460);
        aufgabe10.crc2.lineTo(0, 460);
        var grad = aufgabe10.crc2.createLinearGradient(400, 300, 410, 480);
        grad.addColorStop(0, "#FFFACD");
        grad.addColorStop(0.5, "#F0E68C");
        grad.addColorStop(1, "#BDB76B");
        aufgabe10.crc2.fillStyle = grad;
        aufgabe10.crc2.fill();
        aufgabe10.crc2.stroke();
        aufgabe10.crc2.closePath();
    }
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=Aufgabe10.js.map