let cells = document.querySelectorAll('.cell');
let resetButton = document.querySelector('.reset-button');
let newGameButton = document.getElementById('new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');
let turnO = true;

const winpattern =[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turnO=true;
    enablecells();
    msgContainer.classList.add('hide');
};


cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        if(turnO){
            cell.innerText='O';
            turnO=false;
        }
        else{
            cell.innerText='X';
            turnO=true;
        }
        cell.disabled =true;

        checkWinner();
    });
});

const disablecells=()=>{
    for(let box of cells){
        box.disabled = true;
    }
};
const enablecells=()=>{
    for(let box of cells){
        box.disabled = false;
        box.innerText = '';
    }
};

const showWinner=(winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disablecells();
};




const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1val =cells[pattern[0]].innerText;
        let pos2val =cells[pattern[1]].innerText;
        let pos3val =cells[pattern[2]].innerText;
    
        if(pos1val!='' && pos2val!='' && pos3val!=''){
            if(pos1val===pos2val && pos2val===pos3val){
            
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);