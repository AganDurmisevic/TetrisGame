var scorelist = JSON.parse(localStorage.getItem("scorelist")) || [];

function drawHighscorelist() {
    document.getElementById('highscorelist').innerHTML = "";
    scorelist.sort(function(a, b){return a-b});
    scorelist.reverse();
    longerThanFive();
    for (let i = 1; i < scorelist.length + 1; i ++) {
        document.getElementById('highscorelist').innerHTML += "<br>";
        document.getElementById('highscorelist').innerHTML += "<h2>" + i + ".&nbsp;&nbsp;" + scorelist[i - 1] + "</h2>";
        document.getElementById('highscorelist').innerHTML += "<br>";
    }
}

function longerThanFive() {
    while(scorelist.length > 5) {
        scorelist.pop();
    }
}

function addScore() {
    scorelist.push(score);
    localStorage.setItem("scorelist", JSON.stringify(scorelist));
}
