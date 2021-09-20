import Ball from "./ball.js";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import { build, level1, testlevel } from "./levels.js"

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.specialBalls = 0
        new InputHandler(this.paddle, this.ball);

        const bricks = build(this, level1)


        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]
    }

    addBall(obj) {
        this.specialBalls++
        this.gameObjects.push(obj)
    }

    update() {
        this.gameObjects.forEach(obj => {
            if (!Array.isArray(obj)) {
                obj.update()
            }
            else {
                obj.forEach(ball => ball.update())
                obj.filter(ball => !ball.removeBall)
            }
        })
        this.gameObjects = this.gameObjects.filter(obj => !obj.removeBrick)
        this.gameObjects = this.gameObjects.filter(obj => !obj.removeBall)
    }

    draw(ctx) {
        this.gameObjects.forEach(obj => {
            if (!Array.isArray(obj)) {
                obj.draw(ctx)
            }
            else {
                obj.forEach(ball => ball.draw(ctx))
            }
        })
    }
}