$(document).ready(function () {
    $("h1").hide(0).delay(1).fadeIn(3000);
    $(".btn1").hide(0).delay(1).fadeIn(3000);
});

let btn = document.querySelector(".btn1");
let other = document.querySelector("#four");
let other1 = document.querySelector("#one");
let other2 = document.querySelector("#two");
let other3 = document.querySelector("#three");
let other5 = document.querySelector("#five");

btn.addEventListener("mouseenter", function () {
    console.log("hover over");
    btn.style.backgroundColor = "rgb(13.33, 13.33, 13.33)";
    btn.style.color = "white";
});

btn.addEventListener("mouseleave", function () {
    console.log("hover over");
    btn.style.backgroundColor = "";
    btn.style.color = "";
});

other.addEventListener("mouseenter", function(){
    other.style.backgroundColor = "rgb(13.33, 13.33, 13.33)";
    other.style.color = "white";
})

other.addEventListener("mouseleave", function(){
    other.style.backgroundColor = "";
    other.style.color = "";
})

other1.addEventListener("mouseenter", function(){
    other1.style.backgroundColor = "rgb(13.33, 13.33, 13.33)";
    other1.style.color = "white";
})

other1.addEventListener("mouseleave", function(){
    other1.style.backgroundColor = "";
    other1.style.color = "";
})
other2.addEventListener("mouseenter", function(){
    other2.style.backgroundColor = "rgb(13.33, 13.33, 13.33)";
    other2.style.color = "white";
})

other2.addEventListener("mouseleave", function(){
    other2.style.backgroundColor = "";
    other2.style.color = "";
})
other3.addEventListener("mouseenter", function(){
    other3.style.backgroundColor = "rgb(13.33, 13.33, 13.33)";
    other3.style.color = "white";
})

other3.addEventListener("mouseleave", function(){
    other3.style.backgroundColor = "";
    other3.style.color = "";
})
other5.addEventListener("mouseenter", function(){
    other5.style.backgroundColor = "rgb(13.33, 13.33, 13.33)";
    other5.style.color = "white";
})

other5.addEventListener("mouseleave", function(){
    other5.style.backgroundColor = "";
    other5.style.color = "";
})


$(".btn1").click(function(){
    $(".box").removeClass("hide");
    // collect all the divs
    let divs = document.querySelectorAll(".box");
    // get window width and height
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    // i stands for "index". you could also call this banana or haircut. it's a variable
    for (let i = 0; i < divs.length; i++) {

        // shortcut! the current div in the list
        let thisDiv = divs[i];

        // get random numbers for each element
        randomTop = getRandomNumber(0, winHeight);
        randomLeft = getRandomNumber(0, winWidth);

        // update top and left position
        thisDiv.style.top = randomTop + "px";
        thisDiv.style.left = randomLeft + "px";

    }

    // function that returns a random number between a min and max
    function getRandomNumber(min, max) {

        return Math.random() * (max - min) + min;

    }
})

$("#four").click(function(){
    window.location.href="bubbles.html";
 })