//import { rocketCollision } from "./collision.js";

export default class Rocket {
    constructor(game, state) {
        this.image = document.getElementById("rocketImg");
        this.speed = {
            x: 0,
            y: 0
        }
        this.height = 80;
        this.width = 40;
        this.position = {
            x: game.paddle.center.x - this.width / 2,
            y: 485
        }
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.state = state ? state: "attached"
        this.removeRocket = false;
        this.isRocket = true;
        this.isBrick = false;
    }

    remove() {
        this.removeRocket = true;
    }

    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width,
            this.height)
    }

    start() {
        this.speed = {
            x: 0,
            y: -8
        }
        this.state = "moving"
        new Audio("../assets/audio/sheesh.wav").play()
    }

    update() {
        if (this.state === "attached") {
            if (this.center.x - this.game.paddle.width / 2  < 0 ||
                this.center.x + this.game.paddle.width / 2 > this.game.gameWidth
                ) {
                this.position.x = this.game.paddle.position.x + this.game.paddle.width / 2 - this.width / 2;
                this.center.x = this.game.paddle.position.x + this.game.paddle.width / 2;
            }
            this.position.x += this.game.paddle.speed
            this.center.x += this.game.paddle.speed
        } else {
            if (this.position.y + this.height < 0) this.remove()
            this.position.y += this.speed.y;
            this.center.y += this.speed.y;
        }
    }
}