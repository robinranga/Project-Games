let play_but = document.querySelector("#butt");

play_but.addEventListener("mouseover", () => {
  play_but.style.boxShadow = "0 0 1rem #F7EC59";
});

play_but.addEventListener("mouseout", () => {
  play_but.style.boxShadow = "none";
});

let inp_num = document.querySelector("input");

inp_num.addEventListener("click", () => {
  inp_num.setAttribute("placeholder", "");
  inp_num.style.border = "none";
});

inp_num.addEventListener("blur", () => {
  inp_num.setAttribute("placeholder", "Try a number...");
});

let number = Math.floor(Math.random() * 100);

let msg = null;

let user_number = null;

let trials = document.querySelector(".trials");

let msg_src = document.querySelector("#trials-cont");

let button1_div = document.querySelector("#button-div");

let button2_div = document.querySelector("#button2-div");

const check_num = () => {
  if (number > user_number) {
    msg = "Too Small !";
    msg_src.style.color = "#FC2F00";
  } else if (number < user_number) {
    msg = "Too Big !";
    msg_src.style.color = "#FC2F00";
  } else {
    msg = "Congratulations You Won !";
    msg_src.style.color = "#61FF7E";
    button1_div.style.display = "none";
    button2_div.style.display = "block";
  }

  msg_src.innerText = msg;
  trials.style.display = "block";
};

play_but.addEventListener("click", () => {
  user_number = Number(inp_num.value);
  check_num();
});

let new_but = document.querySelector("#butt2");

new_but.addEventListener("mouseover", () => {
  new_but.style.boxShadow = "0 0 1rem #DAFF7D";
});

new_but.addEventListener("mouseout", () => {
  new_but.style.boxShadow = "none";
});

new_but.addEventListener("click", () => {
  button1_div.style.display = "flex";
  button2_div.style.display = "none";
  trials.style.display = "none";
  number = Math.floor(Math.random() * 100);
});

let reset_but = document.querySelector("#butt3");

reset_but.addEventListener("mouseover", () => {
  reset_but.style.boxShadow = "0 0 1rem #DAFF7D";
});

reset_but.addEventListener("mouseout", () => {
  reset_but.style.boxShadow = "none";
});

reset_but.addEventListener("click", () => {
  number = Math.floor(Math.random() * 100);
  trials.style.display = "none";
});
