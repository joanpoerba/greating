// greating
const nama = prompt("who r u?");

const span = document.getElementById("span").innerHTML = nama;


// dark/light mode
const toggle = document.getElementById("toggle");
4
toggle.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        this.innerHTML = "LIGHT";
    } else {
        this.innerHTML = "DARK";
    }
}


// hai 
const hai = document.getElementById("hai");

hai.onclick = function(){
    hai.innerHTML = "🤚";
    hai.style.transform = "rotate(20deg)";
    hai.style.transition = "0.5s";
}