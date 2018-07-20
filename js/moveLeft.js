<<<<<<< HEAD
function moveLeft(arena, player) {
=======
//The function moves the tiles left
function moveLeft(player) {
>>>>>>> 19472b4e4c894f0c8ec0fefdc1753f86488bf7b2

    player.pos.x -= 1;

    if (collide(arena, player)) {
        player.pos.x += 1;
    }
    drawWorld();
    drawWorld2();
}