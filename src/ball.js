import { paddleCollision } from "./collision.js";

export default class Ball {
    constructor(game, state) {
        this.image = document.getElementById("gitBall");
        this.position = {
            x: 387.5,
            y: 535
        }
        this.speed = {
            x: 3,
            y: -5
        }
        this.size = 25;
        this.hitPaddle = false;
        this.center = {
            x: this.position.x + this.size / 2,
            y: this.position.y + this.size / 2
        }
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.state = state ? state: "attached"
        this.removeBall = false;
        this.isBrick = false;
        this.wallSound = new Audio("../assets/audio/wallsound.mp3");
        this.startSound = new Audio("../assets/audio/startsound.mp3");
        this.soundsBtn = document.getElementById("muteSounds");
        this.musicBtn = document.getElementById("muteMusic");
    }
    
    remove() {
        this.removeBall = true;
        this.game.specialBalls--
    }

    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.size,
            this.size)
    }

    start() {
        this.speed = {
            x: 1,
            y: -5
        }
        this.state = "moving"
        if (!this.musicBtn.classList.contains("pressed")) this.game.music.play();
        if (!this.soundsBtn.classList.contains("pressed")) this.startSound.play();
    }

    update() {
        // TODO: fix ball paddle attachment
        if (this.state === "attached") {
            if (this.center.x - this.game.paddle.width / 2  < 0 ||
                this.center.x + this.game.paddle.width / 2 > this.game.gameWidth
                ) {
                    this.position.x = this.game.paddle.position.x + this.game.paddle.width / 2 - this.size / 2;
                    this.center.x = this.game.paddle.position.x + this.game.paddle.width / 2;
            }
            this.position.x += this.game.paddle.speed
            this.center.x += this.game.paddle.speed
        } else {
            if (this.position.y + this.size > this.gameHeight && this.game.specialBalls < 1) {
                this.remove();
                this.game.reset();
            }
            if (this.position.y + this.size > this.gameHeight && this.game.specialBalls >= 1) {
                this.remove();
            }
            if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
                this.speed.x = -this.speed.x;
                if (!this.soundsBtn.classList.contains("pressed")) new Audio("../assets/audio/wallsound.mp3").play()
                this.hitPaddle = false;
            }
            if (this.position.y < 0) {
                this.speed.y = -this.speed.y;
                if (!this.soundsBtn.classList.contains("pressed")) new Audio("../assets/audio/wallsound.mp3").play()
                this.hitPaddle = false;
            }
            this.position.x += this.speed.x;
            this.position.y += this.speed.y;
            this.center.x += this.speed.x;
            this.center.y += this.speed.y;
        }
    }
}