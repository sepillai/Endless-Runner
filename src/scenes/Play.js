let timer;

class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {
        this.bg = this.add.tileSprite(centerX, centerY, 'road').setOrigin(0.5);
        this.bg.setDisplaySize(w, h); // Stretches it to fill the screen

        player = this.physics.add.sprite(100, centerY, 'player').setCollideWorldBounds(true);
        player.play('drive');
        cursors = this.input.keyboard.createCursorKeys();
        
        this.foodGroup = this.physics.add.group();
        this.obstacleGroup = this.physics.add.group();
        
        this.foodItems = ['pizza', 'apple', 'boba', 'cookie'];
        this.scoreText = this.add.text(20, 20, 'Food Collected: 0', { fontSize: '24px', fill: '#FFF' });
        this.timerText = this.add.text(w - 150, 20, 'Time: 30', { fontSize: '24px', fill: '#FFF' });
        
        this.time.addEvent({ delay: 2000, callback: this.spawnFood, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 3000, callback: this.spawnObstacle, callbackScope: this, loop: true });
        timer = this.time.addEvent({ delay: 1000, callback: this.updateTimer, callbackScope: this, loop: true });
        
        this.physics.add.overlap(player, this.foodGroup, this.collectFood, null, this);
        this.physics.add.overlap(player, this.obstacleGroup, this.hitObstacle, null, this);
    }

    spawnFood() {
        let foodType = Phaser.Utils.Array.GetRandom(this.foodItems);
        let food = this.foodGroup.create(w, Phaser.Math.Between(50, h - 50), foodType);
        food.setVelocityX(-200);
    }

    spawnObstacle() {
        let obstacle = this.obstacleGroup.create(w, Phaser.Math.Between(50, h - 50), 'obstacle');
        obstacle.setVelocityX(-250);
    }

    collectFood(player, food) {
        food.destroy();
        foodCount++;
        this.scoreText.setText('Food Collected: ' + foodCount);
        this.sound.play('pickup');
    }

    hitObstacle(player, obstacle) {
        this.sound.play('crash');
        this.scene.start('gameOverScene');
    }

    updateTimer() {
        timeLeft--;
        this.timerText.setText('Time: ' + timeLeft);
        if (timeLeft <= 0) {
            this.scene.start('menuScene');
        }
    }

    update() {
        this.bg.tilePositionX += 4;
        if (cursors.up.isDown) {
            player.setVelocityY(-200);
        } else if (cursors.down.isDown) {
            player.setVelocityY(200);
        } else {
            player.setVelocityY(0);
        }
        
        if (cursors.left.isDown) {
            player.setVelocityX(-200);
        } else if (cursors.right.isDown) {
            player.setVelocityX(200);
        } else {
            player.setVelocityX(0);
        }
    }
}
