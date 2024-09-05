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
        check_win()

    })
})

let wining_cases = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,3,6],
    [3,4,5],
    [6,7,8]
]


const check_win = () => {
wining_cases.forEach( (val) => {
    let posval1 = boxes[val[0]].innerText;
    let posval2 = boxes[val[1]].innerText;
    let posval3 = boxes[val[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
        if (posval1 === posval2 && posval2 === posval3){
            alert("Winner")
        }
    }
})}


