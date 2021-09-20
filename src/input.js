
export default class InputHandler {
    constructor(paddle, ball) {
        document.addEventListener("keydown", event => {
            if (event.key === "ArrowLeft") {
                paddle.moveLeft();
            }
            if (event.key === "ArrowRight") {
                paddle.moveRight();
            }
        })
        document.addEventListener("keyup", event => {
            if (event.key === "ArrowLeft" && paddle.speed < 0) {
                paddle.stop();
            }
            if (event.key === "ArrowRight" && paddle.speed > 0) {
                paddle.stop();
            }
        })
        document.addEventListener("keydown", event => {
            if (event.key === " " && ball.state !== "moving") {
                ball.start();
            }
        })
    }
}