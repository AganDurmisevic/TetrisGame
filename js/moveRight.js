<<<<<<< HEAD
function moveRight(arena, player) {
=======
//The function moves the tiles right
function moveRight(player) {
>>>>>>> 19472b4e4c894f0c8ec0fefdc1753f86488bf7b2
    player.pos.x += 1;
    if (collide(arena, player)) {
        player.pos.x -= 1;
    }
    drawWorld();
    drawWorld(2);
}