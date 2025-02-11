let foodCount = 0;

// Declare but initialize in create()

class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {

        this.bgm = this.sound.add('jazz', { 
            mute: false,
            volume: 0.2,
            rate: 1,
            loop: true 
        });
        this.bgm.play();
        // Set up scrolling background
        this.bg = this.add.tileSprite(centerX, centerY, w, h, 'road').setOrigin(0.5);
        this.highScore = localStorage.getItem('highScore') || 0;


        // Create player and enable physics
        
        player = this.physics.add.sprite(100, centerY, 'player').setCollideWorldBounds(true);
        player.setScale(4); // Adjust size if needed
       // player.play('drive');

        // Set up keyboard controls
        cursors = this.input.keyboard.createCursorKeys();
        
        // Create food and obstacle groups
        this.foodGroup = this.physics.add.group();
        this.obstacleGroup = this.physics.add.group();
        
        // Define available food items
        this.foodItems = ['pizza', 'apple', 'boba', 'cookie'];
        
        // Score and timer UI
        this.scoreText = this.add.text(20, 20, 'Food Collected: 0', { fontSize: '24px', fill: '#FFF' });
        this.highScoreText = this.add.text(20, 50, `High Score: ${highScore}`, { fontSize: '24px', fill: '#FFF' });






        // Spawn food and obstacles
        this.time.addEvent({ delay: 2000, callback: this.spawnFood, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 3000, callback: this.spawnObstacle, callbackScope: this, loop: true });

        // Collision detection
        this.physics.add.overlap(player, this.foodGroup, this.collectFood, null, this);
        this.physics.add.overlap(player, this.obstacleGroup, this.hitObstacle, null, this);

        this.emitter = this.add.particles(0, 0, "particle", {
            frame: [],
            lifespan: 3000,
            speed: { min: 200, max: 250 },
            scale: { start: 0.6, end: 0 },
            gravityY: 0,
            blendMode: "ADD",
            emitting: false,
        });
    }

    spawnFood() {
        let foodType = Phaser.Utils.Array.GetRandom(this.foodItems);
        let food = this.foodGroup.create(w, Phaser.Math.Between(50, h - 50), foodType);
        food.setVelocityX(-200);
        food.setScale(4); // Make food items bigger if needed
    }

    spawnObstacle() {
        let obstacle = this.obstacleGroup.create(w, Phaser.Math.Between(50, h - 50), 'obstacle');
        obstacle.setVelocityX(-250);
        obstacle.setScale(4); // Adjust obstacle size if needed
    }

    collectFood(player, food) {
        food.destroy();
        this.emitter.x = food.x;
        this.emitter.y = food.y;
    
        this.emitter.explode(16);


        foodCount++;
        this.scoreText.setText('Food Collected: ' + foodCount);
        if (foodCount > highScore) {
            highScore = foodCount;
            //play high score sound
            this.sound.play('highscore');
            localStorage.setItem('highScore', highScore); // Save to local storage
            this.highScoreText.setText(`High Score: ${highScore}`); // Update UI
        }
        this.sound.play('pickup');
    }

    hitObstacle(player, obstacle) {
        this.sound.play('crash');
        this.scene.start('gameOverScene');
    }

    update() {
        // Scroll background continuously
        this.bg.tilePositionX += 2;

        // Player movement
        if (cursors.up.isDown) {
            player.setVelocityY(-200);
        } else if (cursors.down.isDown) {
            player.setVelocityY(200);
        } else {
            player.setVelocityY(0);
        }
        
        if (cursors.left.isDown) {
            player.setVelocityX(-200);
            //player.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(200);
            //player.play('right', true);
        } else {
            player.setVelocityX(0);
            //player.play('drive', true);
        }
    }
}
