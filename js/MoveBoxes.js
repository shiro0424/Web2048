function upMove(){
    for(let i = 0; i < 4; i++){
        let currCol = getCol(i);
        let rowIndex = 0;
        for(let j = 0; j < currCol.length; j++){
            if(j + 1 < currCol.length && currCol[j] === currCol[j + 1]){
                if(currCol[j] * 2 !== 2048){
                    board[rowIndex][i] = currCol[j] * 2;
                    j++;
                }
                addScore(board[rowIndex][i]);
            }else{
                board[rowIndex][i] = currCol[j];
            }
            rowIndex++;
        }
        for(let k = rowIndex; k < 4; k++){
            board[k][i] = 0;
        }
    }
}

function leftMove() {
    for(let i = 0; i < 4; i++){
        let currRow = getRow(i);
        let colIndex = 0;
        for(let j = 0; j < currRow.length; j++){
            if(j + 1 < currRow.length && currRow[j] === currRow[j + 1]){
                if(currRow[j] * 2 !== 2048){
                    board[i][colIndex] = currRow[j] * 2;
                    j++;
                }
                addScore(board[i][colIndex]);
            }else{
                board[i][colIndex] = currRow[j];
            }
            colIndex++;
        }
        for(let k = colIndex; k < 4; k++){
            board[i][k] = 0;
        }
    }
}

function downMove(){
    for(let i = 0; i < 4; i++){
        let currCol = getCol(i);
        let rowIndex = 3;
        for(let j = currCol.length - 1; j >= 0; j--){
            if(j - 1 >= 0 && currCol[j] === currCol[j - 1]){
                if(currCol[j] * 2 !== 2048){
                    board[rowIndex][i] = currCol[j] * 2;
                    j--;
                }
                addScore(board[rowIndex][i]);
            }else{
                board[rowIndex][i] = currCol[j];
            }
            rowIndex--;
        }
        for(let k = rowIndex; k >= 0; k--){
            board[k][i] = 0;
        }
    }
}

function rightMove(){
    for(let i = 0; i < 4; i++){
        let currRow = getRow(i);
        let colIndex = 3;
        for(let j = currRow.length - 1; j >= 0; j--){
            if(j - 1 >= 0 && currRow[j] === currRow[j - 1]){
                if(currRow[j] * 2 !== 2048){
                    board[i][colIndex] = currRow[j] * 2;
                    j--;
                }
                addScore(board[i][colIndex]);
            }else{
                board[i][colIndex] = currRow[j];
            }
            colIndex--;
        }
        for(let k = colIndex; k >= 0; k--){
            board[i][k] = 0;
        }
    }
}

function getCol(ind){
    let arr = [];
    for(let i = 0; i < 4; i++){
        if(board[i][ind] !== 0){
            arr.push(board[i][ind]);
        }
    }
    console.log("第" + ind + "列的数据" + arr);
    return arr;
}

function getRow(ind){
    let arr = [];
    for(let i = 0; i < 4; i++){
        if(board[ind][i] !== 0){
            arr.push(board[ind][i]);
        }
    }
    console.log("第" + ind + "行的数据" + arr);
    return arr;
}