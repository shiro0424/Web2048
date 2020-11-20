$(function(){
    window.addEventListener("keydown", function(event) {
        if(event.key === 'w' || event.key === 'W' || event.key === "ArrowUp"){
            if(upMovable()){
                setRound();
                upMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
        if(event.key === 'a' || event.key === 'A' || event.key === "ArrowLeft"){
            if(leftMovable()){
                setRound();
                leftMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
        if(event.key === 's' || event.key === 'S' || event.key === "ArrowDown"){
            if(downMovable()){
                setRound();
                downMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
        if(event.key === 'd' || event.key === 'D' || event.key === "ArrowRight"){
            if(rightMovable()){
                setRound();
                rightMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
    }, false);

    $("#btn").click(function(){
        newGame();
    });
});

function setRound(){
    if(isFirst){
        isFirst = false;
    }
}

function newGame(){
    initBoard();
    generateNum();
    generateNum();
    displayGame();
    score = 0;
    isFirst = true;
    showScore();
}
