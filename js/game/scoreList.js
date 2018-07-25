/**
 * This function records the highscore and draws the highscorelist including the name of the player and the score of the player that was achieved
 * @type {any | Array}
 */
var scorelist = JSON.parse (localStorage.getItem ("scorelist")) || [];

function drawHighscorelist () {
    document.getElementById ('highscorelist').innerHTML = "";
    scorelist.sort (function(a, b){return  a.score - b.score });
    scorelist.reverse();
    longerThanFive ();
    for (let i = 1; i < scorelist.length + 1; i ++) {
        document.getElementById ('highscorelist').innerHTML += "<br>";
        document.getElementById ('highscorelist').innerHTML += "<h2>" + i + ".&nbsp;&nbsp;" + scorelist[i - 1].score + "&nbsp;&nbsp;" + scorelist[i - 1].name + "</h2>";
        document.getElementById ('highscorelist').innerHTML += "<br>";
    }
}

// This function reduces the list to the best five
function longerThanFive () {
    while (scorelist.length > 5) {
        scorelist.pop();
    }
}