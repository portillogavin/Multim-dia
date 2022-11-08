console.log("im loaded");
/////////
// Set the date we're counting down to

$(document).ready(function () {
    $("p").hide(0).delay(1).fadeIn(6000);
    $("body").hide(0).delay(1).fadeIn(3000);
    $("h1").hide(0).delay(1).fadeIn(3000);
    $("h2").hide(0).delay(1).fadeIn(3000);
});


var countDownDate = new Date("Oct 22, 2400 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// let rad, rad2;
let radares;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight-20);
    canvas.position(0,0);
    /* rad = new Radar(100, 100, 40); //novo tipo, vai existir um x,y,w.
    rad2 = new Radar(200, 130, 60); */
    radares = [];

    for (let i = 0; i < 10; i++) {
        radares[i] = new Radar(random(width), random(height), random(20, 50)); //cada iteração vai utilizar uma nova estrutura "Radar".
    }
}
// no fim do ciclo "for" obtenho um array "radares" (tamanho 50) onde estão guardados várias estruturas "Radar".

function mousePressed() {
    for (let i = 0; i < radares.length; i++) {
        radares[i].clicked(mouseX, mouseY);
    }
}

function draw() {
    clear();

    /* rad.display();
    rad2.display(); */

    for (let i = 0; i < radares.length; i++) {
        //radares[i].checkCollision(mouseX, mouseY);
        radares[i].update();
        radares[i].display();
    }
}


function Radar(x1, y1, w1) {
    //estrutura para poder guardar.
    this.x = x1;
    this.y = y1;
    this.w = w1;
    this.speed = random(3.5);
    this.col = color(255);
    this.hit = false;

    // udpdate.
    this.update = function () {

        if (this.hit === false) {
            this.y += this.speed;
        }

        if (this.y > (height + this.w / 2)) {
            this.y = 0 - this.w / 2;
        }
    }

    /*
    this.checkCollision = function (x1, y1) { // recebe a localização do cursor.

        let d = dist(x1, y1, this.x, this.y); // distância entre a localização do meu cursor e a localização guardada na estrutura.

        if (d < this.w) { // se a distância for menor que no "w" guardado na estrutura passada:  
            this.hit = true; // muda o .hit para true (para).

        } else { //senão, mantém:
            this.col = color(255);
            this.hit = false;
        }
    }
    */

    // utiliza as informações guardadas na estrutura "Radar" (rad.display() ex.: this.x = 100).
    this.display = function () {
        fill(this.col);
        stroke(0);
        ellipse(this.x, this.y, this.w * 2, this.w * 2);

    }

    this.clicked = function () {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.w) { // se a distância for menor que no "w" guardado na estrutura passada:  
            this.hit = true; // muda o .hit para true (para).
            this.col = color(0);
        }
    }

    /*
    function mousePressed() {
      radares[radares.length] = new Radar(mouseX, mouseY, random(20, 60)); //vai a ultima posição do array e troca pela estrutura "Radar" nova.
    }
    */


}




