//Seeya Pillai
//Delivery Dash
//15 hours 
//Creative Tilt: 
//Technical: Added local storage to display a high score that updates every time the player beats the current high score. Local
//storage remembers the previous high score and plays a sound when the player hits the high score in game. 

 //Visual: I used the Particle Documentation from Phaser and added a particle explosion every time the player collects a food item!


'use strict';

let config = {
    parent: 'myGame',
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    },
    scene: [ Load, Menu, Play, GameOver, Credits ]
};

let game = new Phaser.Game(config);

// Global Variables
let centerX = game.config.width / 2;
let centerY = game.config.height / 2;
let w = game.config.width;
let h = game.config.height;
const textSpacer = 64;
let player;
let level = 1;
let score = 0;
let highScore = 0;
let newHighScore = false;
let cursors;
let foodCount = 0;