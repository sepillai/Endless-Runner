class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }

    create() {
        this.add.text(centerX, centerY - textSpacer, 'GAME OVER', { fontSize: '48px', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Press UP ARROW to Restart', { fontSize: '24px', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Press C for Credits', { fontSize: '24px', fill: '#FFF' }).setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('C'))) {
            this.scene.start('creditsScene');
        }
    }
}
