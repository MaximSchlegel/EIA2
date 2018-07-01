/*
Aufgabe: 11
Name: Maxim Schlegel
Matrikel: 257202
Datum: 01.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let objects: MovingObjects[] = [];
    let n: number = 12;
    let imagedata: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

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

        imagedata = crc2.getImageData(0, 0, 840, 460);

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            objects.push(fish);

            let bubble: Bubbles = new Bubbles();
            bubble.r = Math.random() * 12;
            objects.push(bubble);
        }

        canvas.addEventListener("click", newObjects);
        animate();
    }

    function newObjects(_event: MouseEvent): void {
        let mouseX: number = _event.clientX;
        let mouseY: number = _event.clientY;

        for (let i: number = 0; i < 3; i++) {
            let food: Food = new Food();
            if (i == 1) {
                food.x = mouseX;
                food.y = mouseY;
                objects.push(food);
            } else {
                food.x = mouseX + Math.random() * 40 - 2;
                food.y = mouseY + Math.random() * 30 - 2;
                objects.push(food);
            }
        }
    }
    
    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imagedata, 0, 0);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();
    }

    function drawGras1(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 90, _y - 160, _x + 30, _y - 150);
        crc2.quadraticCurveTo(_x - 50, _y - 140, _x + 20, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "#9aCd32";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawGras2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 40, _y + 10, _x + 80, _y + 40, _x, _y + 200);
        crc2.lineTo(_x + 50, _y + 200);
        crc2.bezierCurveTo(_x + 20, _y + 150, _x + 120, _y + 10, _x, _y);
        crc2.fillStyle = "#6B8e23";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawGras3(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 30, _y - 130, _x + 60, _y - 140);
        crc2.quadraticCurveTo(_x - 40, _y - 150, _x - 20, _y);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "#2E8B57";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawChest(_x: number, _y: number) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.lineTo(_x + 50, _y + 35);
        crc2.lineTo(_x + 50, _y - 15);
        crc2.closePath();
        crc2.moveTo(_x + 50, _y - 15);
        crc2.lineTo(_x + 130, _y + 10);
        crc2.lineTo(_x + 130, _y + 70);
        crc2.lineTo(_x + 50, _y + 35);
        crc2.closePath();
        crc2.moveTo(_x + 50, _y - 15);
        crc2.lineTo(_x + 25, _y - 60);
        crc2.lineTo(_x + 115, _y - 35);
        crc2.lineTo(_x + 130, _y + 10);
        crc2.fillStyle = "rgb(96, 56, 19)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.lineTo(_x + 85, _y + 105);
        crc2.lineTo(_x + 85, _y + 40);
        crc2.closePath();
        crc2.moveTo(_x + 85, _y + 105);
        crc2.lineTo(_x + 130, _y + 70);
        crc2.lineTo(_x + 130, _y + 10);
        crc2.lineTo(_x + 85, _y + 40);
        crc2.closePath();
        crc2.moveTo(_x + 115, _y - 35);
        crc2.lineTo(_x + 130, _y + 10);
        crc2.bezierCurveTo(_x + 150, _y + 10, _x + 140, _y + -60, _x + 115, _y - 35);
        crc2.moveTo(_x + 25, _y - 60);
        crc2.lineTo(_x + 115, _y - 35);
        crc2.lineTo(_x + 126, _y - 42);
        crc2.bezierCurveTo(_x - 10, _y - 90, _x + 35, _y + -50, _x + 25, _y - 60);
        crc2.fillStyle = "rgb(140, 98, 57)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawWater(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.lineTo(0, 460);
        crc2.lineTo(840, 460);
        crc2.lineTo(840, 0);
        crc2.lineTo(0, 0);
        let grad = crc2.createLinearGradient(400, 100, 360, 400);
        grad.addColorStop(0, "#E0FFFF");
        grad.addColorStop(0.5, "#aFEEEE");
        grad.addColorStop(1, "#5F9ea0");
        crc2.fillStyle = grad;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }

    function drawGround(): void {
        crc2.beginPath();
        crc2.moveTo(0, 460);
        crc2.lineTo(0, 150);
        for (let i: number = 0; i < 840; i++) {
            crc2.lineTo(i, 20 * Math.sin(i * .015) + 325);
        }
        crc2.lineTo(840, 460);
        crc2.lineTo(0, 460);
        let grad = crc2.createLinearGradient(400, 300, 410, 480);
        grad.addColorStop(0, "#FFFACD");
        grad.addColorStop(0.5, "#F0E68C");
        grad.addColorStop(1, "#BDB76B");
        crc2.fillStyle = grad;
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
}