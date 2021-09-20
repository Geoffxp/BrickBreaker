import { objCollision, specialCollision } from "./collision.js";

export default class Brick {
    constructor(game, position, type) {
        this.game = game;
        this.position = position;
        this.width = 80;
        this.height = 40;
        this.removeBrick = false;
        this.isBrick = true;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
        this.type = type;
        if (this.type === "plus1") {
            this.image = document.getElementById("brickPlusOneImg");
        } else {
            this.image = document.getElementById("brickImg");
        }
    }

    update() {
        if (specialCollision(this.game.gameObjects, this, this.game)) {
            document.querySelector("#bricksound").play()
            this.removeBrick = true;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
}