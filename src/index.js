import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT)
game.start();
const delay = (ms) => new Promise(res => setTimeout(res, ms));
async function gameLoop() {

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update();
    game.draw(ctx);

    const bricks = game.gameObjects.filter(obj => obj.isBrick)
    if (bricks.length < 1) {
        ctx.font = "100px monospace"
        ctx.fillText("YOU DID IT", 125, 250)
        await delay(1000).then(() => game.start())
    }
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
