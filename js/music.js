// howler.js -> makes it easier to play the music.
var sound = new Howl ({

    src: ['audio/Tetris.mp3'],
    preload: true,
    volume: 0.1,
    autoplay: false,
    onplay: function() {

        console.log( 'Play' );

    }

});

var paused = new Howl ({

    src: ['audio/paused.mp3'],
    preload: true,
    volume: 0.5,
    autoplay: false,
    onplay: function() {

        console.log( 'Paused' );

    }

});

var full = new Howl ({

    src: ['audio/full.mp3'],
    preload: true,
    volume: 0.5,
    autoplay: false,
    onplay: function() {

        console.log( 'Sweep' );

    }

});

var move = new Howl ({

    src: ['audio/move.mp3'],
    preload: true,
    volume: 0.5,
    autoplay: false,
    onplay: function() {

        console.log( 'Moved' );

    }

});

