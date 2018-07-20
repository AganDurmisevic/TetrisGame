//The function moves the tiles right
function moveRight(player) {
    player.pos.x += 1;
    if (collide(arena, player1)) {
        player.pos.x -= 1;
    }
    drawWorld(player1);
}

