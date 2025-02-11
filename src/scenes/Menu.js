class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    create() {
        this.add.text(centerX, centerY - textSpacer, 'YUM YUM DELIVERY DASH', { 
            fontSize: '48px', 
            fill: '#FFF' 
        }).setOrigin(0.5);

        this.add.text(centerX, centerY, 'Use ARROW KEYS to move Left, Right, Up, and Down', { 
            fontSize: '24px', 
            fill: '#FFF' 
        }).setOrigin(0.5);
        
        this.add.text(centerX, centerY + textSpacer, 'Pick up food items and do not hit any obstacles!', { 
            fontSize: '24px', 
            fill: '#FFF' 
        }).setOrigin(0.5);
        
        this.add.text(centerX, centerY + textSpacer * 2, 'Press UP to Start', { 
            fontSize: '24px', 
            fill: '#FFF' 
        }).setOrigin(0.5);

        this.add.text(centerX, centerY + textSpacer * 3, 'Press Down for Credits', { 
            fontSize: '24px', 
            fill: '#FFF' 
        }).setOrigin(0.5);

        //keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        //keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        cursors = this.input.keyboard.createCursorKeys();  
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
            this.scene.start('playScene');
        }
        if(Phaser.Input.Keyboard.JustDown(cursors.down)) {
            this.scene.start('creditsScene')
        }

    }
}