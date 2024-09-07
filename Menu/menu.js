let img = document.querySelectorAll(".logos")

img.forEach((logo) => {
    logo.addEventListener("mouseover",() => {
        logo.style.border = "1px solid #F0C987"
        logo.style.boxShadow = "0 0 1rem #89BD9E"
    })
})

img.forEach((logo) => {
    logo.addEventListener("mouseout",() => {
        logo.style.border = "none"
        logo.style.boxShadow = "none"
    })
})

let game_name = document.querySelectorAll(".game-name")

game_name.forEach((name) => {
    name.addEventListener("mouseover",() => {
        name.style.border = "1px solid #9792E3"
        name.style.boxShadow = "0 0 1rem #61E786"
    })
})

game_name.forEach((name) => {
    name.addEventListener("mouseout",() => {
        name.style.border = "none"
        name.style.boxShadow = "none"
    })
})

var name = localStorage.getItem("userName");
    if (name) {
        document.getElementById("greet-cont").textContent = "Welcome, " + name + " !";
    } else {
        document.getElementById("greet-cont").textContent = "Welcome, Guest !";
    }