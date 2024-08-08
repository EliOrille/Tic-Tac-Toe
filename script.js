function Gameboard (){
    const board = new Array(9);
    return{board};
}

function player(name){
    return{name};
}

function createGame(gb,pOne,pTwo){
    const submitButton = document.querySelector('#submitButton');
    let turn = 0;
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
            if(gb.board[0] == gb.board[1] && gb.board[1] == gb.board[2]){
                console.log('win');
            }
        }
    },);
}

const gb = Gameboard();
const playerOne = player("p1");
const playerTwo = player("p2");
let turn = 0;
createGame(gb,playerOne,playerTwo);

