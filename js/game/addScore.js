// The function adds a score to the list and checks (if in multiplayermode) who of the players achieved a higher score
function addScore () {
    scorelist.push ({ score: player1.score, name: yourName });
    localStorage.setItem ("scorelist", JSON.stringify (scorelist));
}
