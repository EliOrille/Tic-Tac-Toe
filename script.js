function Gameboard (){
    const board = new Array(9);
    return{board};
}

function player(name){
    return{name};
}

function fillBoard(){
    
}

function checkWin(gb){
    if(gb.board[0] == gb.board[1] && gb.board[1] == gb.board[2] && gb.board[0] != undefined){
        console.log('win');
        endGame();
    }
    if(gb.board[3] == gb.board[4] && gb.board[4] == gb.board[5] && gb.board[3] != undefined){
        console.log('win');
        endGame();
    }
    if(gb.board[7] == gb.board[8] && gb.board[8] == gb.board[9] && gb.board[7] != undefined){
        console.log('win');
        endGame();
    }
    if(gb.board[0] == gb.board[3] && gb.board[3] == gb.board[6] && gb.board[0] != undefined){
        console.log('win');
        endGame();
    }
    if(gb.board[1] == gb.board[4] && gb.board[4] == gb.board[7] && gb.board[1] != undefined){
        console.log('win');
        endGame();
    }
    if(gb.board[2] == gb.board[5] && gb.board[5] == gb.board[8] && gb.board[2] != undefined){
        console.log('win');
        endGame();
    }
    if(gb.board[0] == gb.board[4] && gb.board[4] == gb.board[8] && gb.board[0] != undefined){
        console.log('win');
        endGame();
    }
    if(gb.board[2] == gb.board[4] && gb.board[4] == gb.board[6] && gb.board[2] != undefined){
        console.log('win');
        endGame();
    }
}

function endGame(){
    const submitButton = document.querySelector('#submitButton');
    const newButton = submitButton.cloneNode(true);
    submitButton.parentNode.replaceChild(newButton, submitButton);

}

function createGame(gb,pOne,pTwo){
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', ()=>{
        const pOnepick = document.getElementById('pick').value;
        if( (-1 < pOnepick && pOnepick < 9) && gb.board[pOnepick] == undefined){
            if(turn % 2 == 0){
                gb.board[pOnepick] = 0;
            } else {
                gb.board[pOnepick] = 1;
            }
            turn++;
            console.log(gb.board);
            checkWin(gb);
        }
    },);
}

const gb = Gameboard();
const playerOne = player("p1");
const playerTwo = player("p2");
let turn = 0;
createGame(gb,playerOne,playerTwo);

