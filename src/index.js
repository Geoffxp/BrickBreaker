import Game from "./game.js";
import { levels } from "./levels.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT)
game.start();
const delay = (ms) => new Promise(res => setTimeout(res, ms));
async function gameLoop() {

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    if (game.level < levels.length) {
        game.update();
        game.draw(ctx);

        if (game.lives < 0) {
            ctx.font = "100px monospace"
            ctx.fillText("YOU DIE", 125, 250)
            await delay(1000).then(() => game.restart())
        }
    
        const bricks = game.gameObjects.filter(obj => obj.isBrick)
        if (bricks.length < 1) {
            ctx.font = "100px monospace"
            ctx.fillText("YOU DID IT", 125, 250)
            await delay(1000).then(() => game.nextLevel())
        }
    } else {
        ctx.font = "100px monospace"
        ctx.fillText("CONGRAT U WIN", 40, 250)
    }
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
