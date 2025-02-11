class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();
            loadingBar.fillStyle(0xFFFFFF, 1);
            loadingBar.fillRect(0, centerY, w * value, 5);
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        this.load.image('player', 'img/new Piskel-1.png.png', { frameWidth: 120, frameHeight: 120});
        //this.load.tilemapTiledJSON('icons', 'turtle/sprites.json');
        this.load.image('road', 'turtle/greyroad.png');
        this.load.image('pizza', 'img/pizza.png');
        this.load.image('cookie', 'img/cookie.png');
        this.load.image('boba', 'img/boba.png');
        this.load.image('apple', 'img/apple.png');
        this.load.image('obstacle', 'img/cone.png');
        this.load.image('stop', 'img/stop.png');
        this.load.audio('jazz', ['audio/jazz_music_background.mp3']);
        this.load.audio('pickup', ['audio/pickup.wav']);
        this.load.audio('power', ['audio/power.wav']);
        this.load.audio('highscore', ['audio/highscore.wav']);
        this.load.audio('crash', ['audio/hit.wav']);
        // powerup 
        //pickup
        //hit
    }

    create() {

        this.scene.start('menuScene');
    }
}