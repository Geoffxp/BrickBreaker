import Game from "./game.js";
import { levels } from "./levels.js";
import MusicPlayer from "./music.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let music = new MusicPlayer();
let game = new Game(GAME_WIDTH, GAME_HEIGHT, music)

game.start();
const delay = (ms) => new Promise(res => setTimeout(res, ms));
async function gameLoop() {

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update();
    game.draw(ctx);
    if (game.level < levels.length) {
        if (game.lives < 0) {
            music.lose();
            ctx.font = "100px monospace"
            ctx.fillText("YOU DIE", 200, 300)
            await delay(3000).then(() => game.restart())
        }
    
        const bricks = game.gameObjects.filter(obj => obj.isBrick)
        if (bricks.length < 1) {
            music.nextLevel();
            ctx.font = "100px monospace"
            ctx.fillText("YOU DID IT", 125, 250)
            await delay(1500).then(() => game.nextLevel())
        }
    } else {
        music.win();
        ctx.font = "100px monospace"
        ctx.fillText("CONGRAT U WIN", 40, 250)
        await delay(3000).then(() => game.restart())
    }
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
