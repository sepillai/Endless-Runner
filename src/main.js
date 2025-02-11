//Seeya Pillai
//Delivery Dash
//15 hours 
//Creative Tilt: 


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