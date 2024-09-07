document.addEventListener("DOMContentLoaded" , () => {
let play_but = document.querySelector("#play_button");

play_but.addEventListener("mouseover",() => {
    document.querySelector("a").style.boxShadow = "0 0 1rem #32DE8A"
})

play_but.addEventListener("mouseout",() => {
    document.querySelector("a").style.boxShadow = "none"
})

let inp_name = document.querySelector("input");

inp_name.addEventListener("click",() => {
    inp_name.setAttribute("placeholder","")
})

inp_name.addEventListener("blur",() => {
    inp_name.setAttribute("placeholder","What's your name ?")
})
})

function savename() {
    var name = document.getElementById("input_name").value;
    localStorage.setItem("userName", name);
    window.location.href = "/Menu/menu.html"; 
} 