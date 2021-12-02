// set intial count
let count = 0;
let multiplier = 1;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const btnCount = document.querySelectorAll(".btn-count");

// controls multiplier count
btnCount.forEach(function(btn) {
    btn.addEventListener("click", function(mult) {
        const add = mult.currentTarget.classList;
        if (add.contains("1")) {
            multiplier = 1;
        }
        if (add.contains("2")) {
            multiplier = 2;
        }
        if (add.contains("5")) {
            multiplier = 5;
        }

        document.getElementById("mult-count").innerHTML = `Multiplier: ${multiplier}`;
    })
});

// controls increase and decrease
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count -= multiplier;
        } else if (styles.contains("increase")) {
            count += multiplier;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "hsl(209, 61%, 16%)";
        }
        value.textContent = count;
    })
});