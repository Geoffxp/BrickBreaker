import Ball from "./ball.js";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import { build, levels } from "./levels.js"

export default class Game {
    constructor(gameWidth, gameHeight, music) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.music = music;
        this.level = 0;
        this.lives = 2;
        this.bg = document.getElementById("bg");
    }

    start() {
        this.rocket = null;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.specialBalls = 0;
        new InputHandler(this.paddle, this.ball);
        const bricks = build(this, levels[this.level])
        
        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]
    }

    nextLevel() {
        this.level++;
        this.lives++
        this.start();
    }

    reset() {
        this.music.ouch();
        this.lives--
        const bricks = this.gameObjects.filter(obj => obj.isBrick)
        this.rocket = null;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.specialBalls = 0;
        new InputHandler(this.paddle, this.ball);

        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]
    }

    restart() {
        this.lives = 3;
        this.level = 0;
        this.start();
    }

    addBall(obj) {
        this.specialBalls++
        this.gameObjects.push(obj)
    }

    addRocket(obj) {
        new InputHandler(this.paddle, this.ball, obj);
        this.rocket = obj;
        this.gameObjects.push(this.rocket);
    }

    update() {
        this.gameObjects.forEach(obj => obj.update())
        this.gameObjects = this.gameObjects.filter(obj => !obj.removeBrick)
        this.gameObjects = this.gameObjects.filter(obj => !obj.removeBall)
        this.gameObjects = this.gameObjects.filter(obj => !obj.removeRocket)
    }

    draw(ctx) {
        ctx.drawImage(this.bg, 0, 0)
        ctx.font = "20px monospace"
        ctx.fillText(`Lives: ${this.lives}`, 700, 20)
        ctx.fillText(`Level: ${this.level + 1}`, 10, 20)
        
        this.gameObjects.forEach(obj => obj.draw(ctx));
    }
}