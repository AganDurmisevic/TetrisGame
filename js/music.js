// howler.js -> makes it easier to play the music.
var sound = new Howl ({

    src: ['audio/Tetris.mp3'],
    preload: true,
    volume: 0.5,
    autoplay: false,
    onplay: function() {

        console.log( 'Play' );

    }

});

sound.play();
