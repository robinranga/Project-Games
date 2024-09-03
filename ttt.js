let boxes = document.querySelectorAll(".box");

let turnX = true;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }box.disabled = true;
    })
})