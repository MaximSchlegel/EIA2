/*
Abschlussaufgabe
Name: Maxim Schlegel
Matrikel: 257202
Datum: 27.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    window.addEventListener("touchmove", touchMove);
    export let crc2: CanvasRenderingContext2D;
    let objects: MovingObjects[] = [];

    // Init function
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Canvas size = Window size
        crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerHeight;

        // Generate circles
        for (let i: number = 0; i < 700; i++) {
            let circle: Circle = new Circle();
            objects.push(circle);
        }
        animate();
    }

    // Animate Circles
    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }

    // Track mouse movement
    window.addEventListener("mousemove", function(event) {
        let mouseX: number = event.screenX;
        let mouseY: number = event.screenY;
        mouseX = event.x;
        mouseY = event.y;
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].mouseMove(mouseX, mouseY);
        }
        //console.log("X: " + mouseX);
        //console.log("Y: " + mouseY);
    });

    // Track touch movement
    window.addEventListener("touchmove", function(event) {
        let touchX: number = event.screenX;
        let touchY: number = event.screenY;
        touchX = event.x;
        touchY = event.y;
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].mouseMove(touchX, touchY);
        }
        //console.log("X: " + touchX);
        //console.log("Y: " + touchY);
    });

    // Adjusts canvas even after resizing your window
    window.addEventListener("resize", function(event) {
        crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerHeight;
    });
}