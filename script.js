function Gameboard (){
    const board = new Array(9);
    return{board};
}

function player(name){
    return{name};
}

function checkWin(gb){
    if(gb.board[0] == gb.board[1] && gb.board[1] == gb.board[2] && gb.board[0] != undefined){
        endGame(gb.board[0]);
    }
    if(gb.board[3] == gb.board[4] && gb.board[4] == gb.board[5] && gb.board[3] != undefined){
        endGame(gb.board[3]);
    }
    if(gb.board[7] == gb.board[8] && gb.board[8] == gb.board[9] && gb.board[7] != undefined){
        endGame(gb.board[7]);
    }
    if(gb.board[0] == gb.board[3] && gb.board[3] == gb.board[6] && gb.board[0] != undefined){
        endGame(gb.board[0]);
    }
    if(gb.board[1] == gb.board[4] && gb.board[4] == gb.board[7] && gb.board[1] != undefined){
        endGame(gb.board[1]);
    }
    if(gb.board[2] == gb.board[5] && gb.board[5] == gb.board[8] && gb.board[2] != undefined){
        endGame(gb.board[2]);
    }
    if(gb.board[0] == gb.board[4] && gb.board[4] == gb.board[8] && gb.board[0] != undefined){
        endGame(gb.board[0]);
    }
    if(gb.board[2] == gb.board[4] && gb.board[4] == gb.board[6] && gb.board[2] != undefined){
        endGame(gb.board[2]);
    }
}

function endGame(winner){
    const gameSquares = document.querySelectorAll('.square');
    gameSquares.forEach(square =>{
        const newSquare = square.cloneNode(true);
        square.parentNode.replaceChild(newSquare,square);
    });

    if(winner == 0){
        console.log('X wins');
    } else if(winner == 1) {
        console.log('O wins');
    }

}

function createGame(gb,pOne,pTwo){
    const gameSquares = document.querySelectorAll('.square');

    gameSquares.forEach(square =>{
        square.addEventListener('click', ()=>{
            const pick = square.dataset.indexNumber;
            if( (-1 < pick && pick < 9) && gb.board[pick] == undefined){
                if(turn % 2 == 0){
                    gb.board[pick] = 0;
                    square.textContent = "X";
                } else {
                    gb.board[pick] = 1;
                    square.textContent = "O";
                }
                turn++;
                checkWin(gb);
            }
        })
    });


    // submitButton.addEventListener('click', ()=>{
    //     const pOnepick = document.getElementById('pick').value;
    //     if( (-1 < pOnepick && pOnepick < 9) && gb.board[pOnepick] == undefined){
    //         if(turn % 2 == 0){
    //             gb.board[pOnepick] = 0;
    //         } else {
    //             gb.board[pOnepick] = 1;
    //         }
    //         turn++;
    //         console.log(gb.board);
    //         checkWin(gb);
    //     }
    // },);
}

const gb = Gameboard();
const playerOne = player("p1");
const playerTwo = player("p2");


let turn = 0;
createGame(gb,playerOne,playerTwo);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=>{
    const gameSquares = document.querySelectorAll('.square');
    gameSquares.forEach(square =>{
        square.textContent = "";
        const newSquare = square.cloneNode(true);
        square.parentNode.replaceChild(newSquare,square);
    });
    endGame();
    const gb = Gameboard();
    turn = 0;
    createGame(gb,playerOne,playerTwo);
});

