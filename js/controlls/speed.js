var check = 1000;
var speed = 1000;

// This function increases the speed
function modifySpeed() {

    if ( score < check ) {

        if ( typeof interval !== "undefined" ) {

            clearInterval ( interval );
            //console.log(timer);
        }
        clearInterval ( interval );
        interval = setInterval ( function () {
            moveDown (arena1, player1);
            moveDown (arena2, player2);
        }, speed );

    } else {

        check += 1000;

        if ( speed > 500 ) {
            speed -= 100;
        } else if ( speed > 200 ) {
            speed -= 50;
        } else if ( speed > 100 ) {
            speed -= 5;
        }

        if ( speed <= 30 ) {
            document.getElementById ( 'gameOverAnim' ).innerHTML = "YOU WON!";
            clearInterval ( interval );
            gameOverAnim.style.visibility = 'visible';
        }

    }

}
