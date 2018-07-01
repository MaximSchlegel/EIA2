/*
Aufgabe: 11
Name: Maxim Schlegel
Matrikel: 257202
Datum: 01.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe11;
(function (aufgabe11) {
    window.addEventListener("load", init);
    var objects = [];
    var n = 12;
    var imagedata;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        aufgabe11.crc2 = canvas.getContext("2d");
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
        imagedata = aufgabe11.crc2.getImageData(0, 0, 840, 460);
        for (var i = 0; i < n; i++) {
            var fish = new aufgabe11.Fish();
            objects.push(fish);
            var bubble = new aufgabe11.Bubbles();
            bubble.r = Math.random() * 12;
            objects.push(bubble);
        }
        canvas.addEventListener("click", newObjects);
        animate();
    }
    function newObjects(_event) {
        var mouseX = _event.clientX;
        var mouseY = _event.clientY;
        for (var i = 0; i < 3; i++) {
            var food = new aufgabe11.Food();
            if (i == 1) {
                food.x = mouseX;
                food.y = mouseY;
                objects.push(food);
            }
            else {
                food.x = mouseX + Math.random() * 40 - 2;
                food.y = mouseY + Math.random() * 30 - 2;
                objects.push(food);
            }
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        aufgabe11.crc2.putImageData(imagedata, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (var i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (var i = 0; i < objects.length; i++)
            objects[i].draw();
    }
    function drawGras1(_x, _y) {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(_x, _y);
        aufgabe11.crc2.quadraticCurveTo(_x - 90, _y - 160, _x + 30, _y - 150);
        aufgabe11.crc2.quadraticCurveTo(_x - 50, _y - 140, _x + 20, _y);
        aufgabe11.crc2.lineTo(_x, _y);
        aufgabe11.crc2.fillStyle = "#9aCd32";
        aufgabe11.crc2.fill();
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.stroke();
    }
    function drawGras2(_x, _y) {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(_x, _y);
        aufgabe11.crc2.bezierCurveTo(_x + 40, _y + 10, _x + 80, _y + 40, _x, _y + 200);
        aufgabe11.crc2.lineTo(_x + 50, _y + 200);
        aufgabe11.crc2.bezierCurveTo(_x + 20, _y + 150, _x + 120, _y + 10, _x, _y);
        aufgabe11.crc2.fillStyle = "#6B8e23";
        aufgabe11.crc2.fill();
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.stroke();
    }
    function drawGras3(_x, _y) {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(_x, _y);
        aufgabe11.crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 60, _y - 140);
        aufgabe11.crc2.quadraticCurveTo(_x - 40, _y - 150, _x - 20, _y);
        aufgabe11.crc2.lineTo(_x, _y);
        aufgabe11.crc2.fillStyle = "#2E8B57";
        aufgabe11.crc2.fill();
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.stroke();
    }
    function drawChest(_x, _y) {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(_x, _y);
        aufgabe11.crc2.lineTo(_x, _y + 50);
        aufgabe11.crc2.lineTo(_x + 50, _y + 35);
        aufgabe11.crc2.lineTo(_x + 50, _y - 15);
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.moveTo(_x + 50, _y - 15);
        aufgabe11.crc2.lineTo(_x + 130, _y + 10);
        aufgabe11.crc2.lineTo(_x + 130, _y + 70);
        aufgabe11.crc2.lineTo(_x + 50, _y + 35);
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.moveTo(_x + 50, _y - 15);
        aufgabe11.crc2.lineTo(_x + 25, _y - 60);
        aufgabe11.crc2.lineTo(_x + 115, _y - 35);
        aufgabe11.crc2.lineTo(_x + 130, _y + 10);
        aufgabe11.crc2.fillStyle = "rgb(96, 56, 19)";
        aufgabe11.crc2.fill();
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.stroke();
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(_x, _y);
        aufgabe11.crc2.lineTo(_x, _y + 50);
        aufgabe11.crc2.lineTo(_x + 85, _y + 105);
        aufgabe11.crc2.lineTo(_x + 85, _y + 40);
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.moveTo(_x + 85, _y + 105);
        aufgabe11.crc2.lineTo(_x + 130, _y + 70);
        aufgabe11.crc2.lineTo(_x + 130, _y + 10);
        aufgabe11.crc2.lineTo(_x + 85, _y + 40);
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.moveTo(_x + 115, _y - 35);
        aufgabe11.crc2.lineTo(_x + 130, _y + 10);
        aufgabe11.crc2.bezierCurveTo(_x + 150, _y + 10, _x + 140, _y + -60, _x + 115, _y - 35);
        aufgabe11.crc2.moveTo(_x + 25, _y - 60);
        aufgabe11.crc2.lineTo(_x + 115, _y - 35);
        aufgabe11.crc2.lineTo(_x + 126, _y - 42);
        aufgabe11.crc2.bezierCurveTo(_x - 10, _y - 90, _x + 35, _y + -50, _x + 25, _y - 60);
        aufgabe11.crc2.fillStyle = "rgb(140, 98, 57)";
        aufgabe11.crc2.fill();
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.stroke();
    }
    function drawWater(_x, _y) {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.lineTo(0, 460);
        aufgabe11.crc2.lineTo(840, 460);
        aufgabe11.crc2.lineTo(840, 0);
        aufgabe11.crc2.lineTo(0, 0);
        var grad = aufgabe11.crc2.createLinearGradient(400, 100, 360, 400);
        grad.addColorStop(0, "#E0FFFF");
        grad.addColorStop(0.5, "#aFEEEE");
        grad.addColorStop(1, "#5F9ea0");
        aufgabe11.crc2.fillStyle = grad;
        aufgabe11.crc2.fill();
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.stroke();
    }
    function drawGround() {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(0, 460);
        aufgabe11.crc2.lineTo(0, 150);
        for (var i = 0; i < 840; i++) {
            aufgabe11.crc2.lineTo(i, 20 * Math.sin(i * .015) + 325);
        }
        aufgabe11.crc2.lineTo(840, 460);
        aufgabe11.crc2.lineTo(0, 460);
        var grad = aufgabe11.crc2.createLinearGradient(400, 300, 410, 480);
        grad.addColorStop(0, "#FFFACD");
        grad.addColorStop(0.5, "#F0E68C");
        grad.addColorStop(1, "#BDB76B");
        aufgabe11.crc2.fillStyle = grad;
        aufgabe11.crc2.fill();
        aufgabe11.crc2.stroke();
        aufgabe11.crc2.closePath();
    }
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=Aufgabe11.js.map