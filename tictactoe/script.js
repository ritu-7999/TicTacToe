console.log("Welcome to Tic Tac Toe")
let music = new Audio("Sneaky-Snitch.mp3")
let audioturn = new Audio("z.mp3")
let gameover = new Audio("mixkit-arcade-retro-game-over-213.wav")
let turn = "X";
let over = false;
// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function tonCheck for a win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[0,4,8],[2,5,8],[2,4,6]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText !== '' ) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + '  Won';
            over = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
    }
    })
}
// Main  game logic
// music.play();
let boxes = document.getElementsByClassName("box");
boxes=Array.from(boxes)
    boxes.forEach(element => {
     let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if (!over) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        }
        }
    });
    })

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e => {
        e.innerText = ""
    });
    turn = "X";
    over = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})