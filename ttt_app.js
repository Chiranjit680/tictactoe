let boxes = document.querySelectorAll('.cell');
let reset = document.querySelector('#reset');
let turnO = true;
const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Define the checkWin function outside of the event listener
const checkWin = () => {
    for (pattern of win) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
            if (turnO) {
                alert("Player X wins");
            } else {
                alert("Player O wins");
            }
            for(let box of boxes){
                box.disabled=true;
            }
            return;
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === '') { // Check if the box is empty before making a move
            if (turnO) {
                box.innerText = 'O';
                turnO = false;
            } else {
                box.innerText = 'X';
                turnO = true;
            }
            box.disabled = true;
            checkWin(); // Call the checkWin function after each move


        }
    });
});
reset.addEventListener('click',()=>
{
    for(let box of boxes){
        box.innerText='';
        box.disabled=false;
    }

})
