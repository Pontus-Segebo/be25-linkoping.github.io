
window.addEventListener("scroll", (event) => {
    let y = this.scrollY;

    console.log(y);
}) 

let date = new Date();


// change the time stamp
// console.log(time);
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const currentDateTime = date.toLocaleString("se-SV", { hour: "2-digit", minute: "2-digit" });

window.onload = function () {
    document.getElementById("time").innerHTML = currentDateTime;
}

function showNav() {

}

// function updateDateTime() {
//     let time = date.getTime();
//     const currentDateTime = date.toLocaleString();
//     document.querySelector('#time').textContent = currentDateTime;
// }

// setInterval(updateDateTime, 1000);

