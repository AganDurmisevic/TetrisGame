var check = 1000;
var speed = 1000;

function modifySpeed() {

    if(score < check) {

        if(typeof interval !== "undefined") {

            clearInterval ( interval );
            //console.log(timer);
        }
        interval = setInterval ( function () {
            moveDown ( player1 );
        }, speed );

    } else {

        check += 1000;

        if(speed > 200) {
            speed -= 200;
        } else if(speed > 60){
            speed -= 10;
        } else if(speed > 20) {
            speed -= 5;
        }

        if {
            document.getElementById('gameOverAnim').innerHTML = "YOU WON!";
            clearInterval( interval );
            gameOverAnim.style.visibility = 'visible';
        }

    }
