const letters = ['a','b','c','d','e','f','g','h','i','j']

let mode = 0;
let newShip = 0;

/*  tryby gry 
0 - start
1 - rozstawianie player 1
2 - rozstawianie player 2
3 - ruch player 1 > sprawdzenie wyniku
4 - ruch player 2 < sprawdzenie wyniku
5 - if win - wygrana
*/


const dimm = 10;

const board1 = document.querySelector('#board1');
const board2 = document.querySelector('#board2');
const board3 = document.querySelector('#board3');
const board4 = document.querySelector('#board4');
const ships = document.querySelectorAll('.ship')


const startBtn = document.querySelector('#startBtn')
ships.forEach(shp => {
    shp.addEventListener('click',whichship);
})
startBtn.addEventListener('click',startGame);

createBoard(board1);
createBoard(board2);
createBoard(board3);
createBoard(board4);

function startGame(){
    console.log('START')
    mode = 1;
}

function createBoard(where){
    for(let i = 0; i < dimm * dimm; i++){
        const newCell = document.createElement('div');
        newCell.id = i;
        newCell.classList.add('cell');
        newCell.innerText = letters[Math.floor(i / 10)] + i % 10;
        newCell.addEventListener('click',(e) => klik(e,where.id))
        where.appendChild(newCell);
    }
}

function klik(e,whichBoard){
    const el = e.target
    console.log(whichBoard,el.innerText, ' - ' , el.id, el.style.background);
    if(mode == 1 && whichBoard == 'board1'){
        if(el.style.background !== 'grey'){
            el.style.background = 'grey'
        } else {
            el.style.background = 'none'
        }
    }
    if(mode == 2 && whichBoard == 'board4'){
        if(el.style.background !== 'red'){
            el.style.background = 'red'
        } else {
            el.style.background = 'none'
        }
    }
    
}

function whichship(e){
    console.log('-------',e.target.id)
}