class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    create() {
        this.add.text(centerX, centerY - textSpacer, 'Credits', { fontSize: '48px', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Game Design & Code: Seeya', { fontSize: '24px', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, 'Music: Royalty-free Source: https://jfxr.frozenfractal.com/', { fontSize: '24px', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer * 2, 'Pixels created using Piskel', { fontSize: '24px', fill: '#FFF' }).setOrigin(0.5);
        this.add.text(centerX, h - textSpacer, 'Press DOWN ARROW to Return', { fontSize: '24px', fill: '#FFF' }).setOrigin(0.5);
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(cursors.down)) {
            this.scene.start('menuScene');
        }
    }
}