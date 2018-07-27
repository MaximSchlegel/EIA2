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
    let mouseMov: MovingObjects[] = [];

    // Init function
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        // Canvas size = Window size
        crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerHeight;

        // Generate circles
        for (let i: number = 0; i < 250; i++) {
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

    window.addEventListener("mousemove", function(event) {
        var mouseX: any = event.screenX;
        var mouseY: any = event.screenY;
        mouseX = event.x;
        mouseY = event.y;
        //console.log("X: " + mouseX);
        //console.log("Y: " + mouseY);
    })
    console.log(objects);
}