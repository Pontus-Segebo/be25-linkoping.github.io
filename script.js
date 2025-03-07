
let date = new Date();

let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const currentDateTime = date.toLocaleString("se-SV", { hour: "2-digit", minute: "2-digit" });

window.onload = function () {
    document.getElementById("time").innerHTML = currentDateTime;
}


