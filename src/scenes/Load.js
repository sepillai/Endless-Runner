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
        this.load.spritesheet('player', 'map/sheet.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('road', 'img/map.png');
        this.load.image('pizza', 'img/pizza.png');
        this.load.image('cookie', 'img/cookie.png');
        this.load.image('boba', 'img/boba.png');
        this.load.image('apple', 'img/apple.png');
        this.load.image('obstacle', 'img/cone.png');
        this.load.image('stop', 'img/stop.png');
        this.load.audio('jazz', ['audio/jazz_music_background.mp3']);
        this.load.audio('pickup', ['audio/pickup.wav']);
        this.load.audio('power', ['audio/power.wav']);
        this.load.audio('crash', ['audio/hit.wav']);
        // powerup 
        //pickup
        //hit
    }

    create() {
        this.anims.create({
            key: 'drive',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2}), // Uses frames 0, 1, 2
            frameRate: 10,
            repeat: -1
        });
        
        this.scene.start('menuScene');
    }
}