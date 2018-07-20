function moveRight(arena, player) {
//The function moves the tiles right
    player.pos.x += 1;
    if (collide(arena, player)) {
        player.pos.x -= 1;
    }
<<<<<<< HEAD
    drawWorld(player1);
}

=======
    drawWorld();
    drawWorld2();
}
>>>>>>> bb27ba59b16f9c8c6b387adcdb9a4a072850869e
