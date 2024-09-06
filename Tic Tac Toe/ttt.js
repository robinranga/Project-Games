let boxes = document.querySelectorAll(".box");

let turnX = true;

let click = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
      click++;
    } else {
      box.innerText = "O";
      turnX = true;
      click++;
    }
    box.disabled = true;
    check_win();
    if (click === 9) {
      who_win = "It was a draw !";
      msg.innerText = who_win;
      msg.style.display = "block";
      reset.style.display = "none";
      new_game.style.display = "inline";
    }
  });
});

let wining_cases = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let reset = document.querySelector("#reset");

reset.addEventListener("mouseover", () => {
  reset.style.border = "1px solid #F0C987";
  reset.style.boxShadow = "0 0 1rem #89BD9E";
});

reset.addEventListener("mouseout", () => {
  reset.style.border = "none";
  reset.style.boxShadow = "0 0 1.5rem black";
});

let msg = document.querySelector(".prop-msg");

let new_game = document.querySelector("#new-game");

let who_win = null;

let o_win = 0;

let x_win = 0;

const check_win = () => {
  wining_cases.forEach((val) => {
    let posval1 = boxes[val[0]].innerText;
    let posval2 = boxes[val[1]].innerText;
    let posval3 = boxes[val[2]].innerText;
    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        if (posval1 === "X") {
          who_win = "X Won !";
          x_win++;
        } else if (posval1 === "O") {
          who_win = "O Won !";
          o_win++;
        }
        msg.innerText = who_win;
        msg.style.display = "block";
        reset.style.display = "none";
        new_game.style.display = "inline";
        document.querySelector(".score-cont1").innerText = x_win;
        document.querySelector(".score-cont2").innerText = o_win;
      }
    }
  });
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  turnX = true;
});

new_game.addEventListener("mouseover", () => {
  new_game.style.border = "1px solid #53DD6C";
  new_game.style.boxShadow = "0 0 .7rem #53DD6C";
});

new_game.addEventListener("mouseout", () => {
  new_game.style.border = "1px solid #none";
  new_game.style.boxShadow = "0 0 1.5rem black";
});

new_game.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  turnX = true;
  msg.style.display = "none";
  reset.style.display = "block";
  new_game.style.display = "none";
});
