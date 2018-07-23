//The function moves the tiles right
function moveRight(arena, player) {

    player.pos.x += 1;
    if (collide(arena, player)) {
        player.pos.x -= 1;
    }

    drawWorld();
    drawWorld2();
}

