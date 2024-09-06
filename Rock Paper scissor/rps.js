let images = document.querySelectorAll(".images");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.boxShadow = "0 0 2rem #34E4EA";
  });
});

images.forEach((image) => {
  image.addEventListener("mouseout", () => {
    image.style.boxShadow = "none";
  });
});

let lst = ["Rock", "Paper", "Scissor"];

let random_num = Math.floor(Math.random() * 3);

let user_choice = null;

let comp_choice = lst[random_num];

let scorecard = document.querySelector(".scorecard");

let user_win = 0;

let bot_win = 0;

images.forEach((image, idx) => {
  image.addEventListener("click", () => {
    image.style.border = "1px solid #0EB1D2";
    image.style.boxShadow = "0 0 2rem #34E4EA";
    user_choice = lst[idx];
    scorecard.style.marginTop = "20px";
    check_win(user_choice);
  });
});

let msg = null;

let prop_msg = document.querySelector("#prop-msg");

const check_win = (user_choice) => {
  if (user_choice === comp_choice) {
    msg = "It was a Draw !";
    prop_msg.style.color = "#EFF7FF";
  } else {
    if (user_choice === "Rock") {
      if (comp_choice === "Scissor") {
        msg = "Congratulations, You Won !";
        user_win++;
        prop_msg.style.color = "#69B578";
      } else {
        msg = "Opps, You Lose !";
        bot_win++;
      }
    } else if (user_choice === "Scissor") {
      if (comp_choice === "Paper") {
        msg = "Congratulations, You Won !";
        user_win++;
        prop_msg.style.color = "#69B578";
      } else {
        msg = "Opps, You Lose !";
        bot_win++;
      }
    } else {
      if (comp_choice === "Rock") {
        msg = "Congratulations, You Won !";
        user_win++;
        prop_msg.style.color = "#69B578";
      } else {
        msg = "Opps, You Lose !";
        bot_win++;
      }
    }
  }
  document.querySelector(".win-msg").style.display = "flex";
  prop_msg.innerText = msg;
  document.querySelector(".score-cont1").innerText = user_win;
  document.querySelector(".score-cont2").innerText = bot_win;
};

let new_game = document.querySelector("#new-game");

new_game.addEventListener("click", () => {
  document.querySelector(".win-msg").style.display = "none";
  scorecard.style.marginTop = "100px";
  random_num = Math.floor(Math.random() * 3);
  comp_choice = lst[random_num];
  prop_msg.style.color = "#D33F49";
});

new_game.addEventListener("mouseover", () => {
  new_game.style.border = "1px solid #558C8C";
  new_game.style.boxShadow = "0 0 1rem #558C8C";
});

new_game.addEventListener("mouseout", () => {
  new_game.style.border = "none";
  new_game.style.boxShadow = "none";
});
