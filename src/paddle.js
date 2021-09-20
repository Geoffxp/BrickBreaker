import { specialCollision } from "./collision.js";

export default class Paddle {
    constructor(game) {
        this.image = document.getElementById("paddleImg");
        this.width = 150;
        this.height = 20;
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.isBrick = false;
        this.isPaddle = true;
        this.position = {
            x: this.gameWidth / 2 - this.width / 2,
            y: this.gameHeight - this.height - 10,
        }
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2,
        }
        this.go = 7;
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = "#66FFB2"
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    moveLeft() {
        this.speed = -this.go;
    }

    moveRight() {
        this.speed = this.go;
    }

    stop() {
        this.speed = 0;
    }

    update() {
        if (this.position.x < 0) {
            this.position.x = 0;
            this.center.x = this.width / 2
        }
        if (this.position.x > this.gameWidth - this.width) {
            this.position.x = this.gameWidth - this.width;
            this.center.x = this.gameWidth - this.width / 2
        }
        if (specialCollision(this.game.gameObjects, this)) {
            new Audio("../assests/audio/paddlesound.wav").play()
        }
        this.position.x += this.speed;
        this.center.x += this.speed;
    }
}