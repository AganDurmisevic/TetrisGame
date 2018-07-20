function moveLeft(arena, player) {
//The function moves the tiles left

    player.pos.x -= 1;

    if (collide(arena, player)) {
        player.pos.x += 1;
    }
    drawWorld();
    drawWorld2();
}