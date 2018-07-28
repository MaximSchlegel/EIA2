/*
Abschlussaufgabe
Name: Maxim Schlegel
Matrikel: 257202
Datum: 27.07.18
    
Hiermit versichere ich, dass ich diesen Code selber geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let objects: MovingObjects[] = [];
    

    // Init function
    function init(_event: Event): void {
        var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Canvas size = window size
        crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerHeight;

        // Generate circles
        for (let i: number = 0; i < 700; i++) {
            let circle: Circle = new Circle();
            objects.push(circle);
        }
        animate();

        // Track mouse movement
        canvas.addEventListener("mousemove", function(event) {
            var mouseX: number = event.screenX;
            var mouseY: number = event.screenY;
            mouseX = event.x;
            mouseY = event.y;
            for (let i: number = 0; i < objects.length; i++) {
                objects[i].mouseMove(mouseX, mouseY);
            }
            //console.log("X: " + mouseX);
            //console.log("Y: " + mouseY);
        });

        // Track touch movement
        canvas.addEventListener("touchmove", function(event) {
            var touchX: number = event.touches[0].screenX;
            var touchY: number = event.touches[0].screenY;
            //touchX = event.touches[0].x;
            //touchY = event.touches[0].y;
            for (let i: number = 0; i < objects.length; i++) {
                objects[i].touchMove(touchX, touchY);
            }
            //console.log("X: " + touchX);
            //console.log("Y: " + touchY);
        });

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
        
        // Adjusts canvas even after resizing your window
        window.addEventListener("resize", function(event) {
            crc2.canvas.width = window.innerWidth;
            crc2.canvas.height = window.innerHeight;
        });
    }
}