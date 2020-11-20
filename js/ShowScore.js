var score = 0;

function addScore(s){
    score += s;
    showScore();
}

function showScore(){
    $("#userScore").text("得分：" + score);
}
