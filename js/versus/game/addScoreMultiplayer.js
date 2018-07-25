function addScore () {
    if (player2.score > player1.score) {
        scorelist.push ({ score: player2.score, name: yourName });
    } else {
        scorelist.push ({ score: player1.score, name: yourName });
    }
    localStorage.setItem ("scorelist", JSON.stringify (scorelist));
}