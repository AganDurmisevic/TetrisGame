function moveLeft(arena, player) {

    player.pos.x -= 1;

    if (collide(arena, player)) {
        player.pos.x += 1;
    }
    drawWorld();
    drawWorld2();
}