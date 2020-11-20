var board = [];
var isFirst = true;

function initBoard(){
    for(let i = 0; i < 4; i++){
        board[i] = [];
        for(let j = 0; j < 4; j++){
            board[i][j] = 0;
        }
    }
}

function generateNum(){
    let isValid = false;
    let row, col;
    while(!isValid){
        row = Math.floor(Math.random() * 4);
        col = Math.floor(Math.random() * 4);
        if(board[row][col] === 0){
            isValid = true;
            if(isFirst){
                board[row][col] = 2;
            }else{
                board[row][col] = (Math.floor(Math.random() * 100) < 90) ? 2 : 4;
            }
        }
    }
}

function displayGame(){
    let rows = $("#gameContainer").children();
    for(let i = 0; i < 4; i++){
        let boxes = rows[i].children;
        for(let j = 0; j < 4; j++){
            if(board[i][j] !== 0){
                boxes[j].innerHTML = board[i][j];
            }else{
                boxes[j].innerHTML = "";
            }
            boxes[j].style.backgroundColor = getBoxColor(board[i][j]);
            if(board[i][j] >= 1024){
                boxes[j].style.fontSize = "40px";
            }else{
                boxes[j].style.fontSize = "50px";
            }
        }
    }
}

function getBoxColor(num){
    switch(num){
        case 2:
            return "#eee4da";
        case 4:
            return "#ede0c8";
        case 8:
            return "#f2b179";
        case 16:
            return "#f59563";
        case 32:
            return "#f67c5f";
        case 64:
            return "#f65e3b";
        case 128:
            return "#edcf72";
        case 256:
            return "#edcc61";
        case 512:
            return "#9c0";
        case 1024:
            return "#33b5e5";
    }
    return "#CDC1B4";
}