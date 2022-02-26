//Lev1_2//
var button = document.querySelector("#btn");
let timeTwo = document.querySelectorAll(".zeit");

let count = 100;

button.addEventListener("click", () => {
    let countD = setInterval(() => {
        timeTwo[0].textContent = `${count}%`;
        count--;

        if (count < 0) {
            clearInterval(countD);
        }
    }, 100);
});