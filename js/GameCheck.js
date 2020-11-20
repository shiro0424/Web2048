function checkFail(){
    if(!(upMovable() || downMovable() || leftMovable() || rightMovable())){
        alert("你输了！当前得分" + score + "，请重新开局！");
    }
}

function upMovable(){
    for(let j = 0; j < 4; j++){
        for(let i = 1; i < 4; i++){
            if(board[i][j] !== 0){
                if(board[i - 1][j] === 0 || board[i-1][j] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function downMovable(){
    for(let j = 0; j < 4; j++){
        for(let i = 2; i >= 0; i--){
            if(board[i][j] !== 0){
                if(board[i + 1][j] === 0 || board[i + 1][j] === board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function leftMovable(){
    for(let i = 0 ; i < 4 ; i++ ){
        for(let j = 1 ; j < 4 ; j++ ) {
            if(board[i][j] !== 0) {
                if (board[i][j - 1] === 0 || board[i][j - 1] === board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false ;
}

function rightMovable()
{
    for(let i = 0 ; i < 4 ; i++) {
        for (let j = 2; j >= 0; j--) {
            if (board[i][j] !== 0) {
                if (board[i][j + 1] === 0 || board[i][j + 1] === board[i][j]) {
                    return true;
                }
            }
        }
    }

    return false ;
}