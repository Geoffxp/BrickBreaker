
export default class InputHandler {
    constructor(paddle, ball, rocket) {
        //KEYBOARD
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
                document.getElementById("instructions").style.display ="none"
                ball.start();
            }
        })
        document.addEventListener("keydown", event => {
            if (event.key === " " && rocket && rocket.state !== "moving") {
                rocket.start();
            }
        })
        //MOUSE
        const leftBtn = document.getElementById("goLeft");
        const rightBtn = document.getElementById("goRight");
        const startBtn = document.getElementById("start");
        leftBtn.addEventListener("mousedown", event => {
            paddle.moveLeft();
        })
        leftBtn.addEventListener("mouseup", event => {
            if (paddle.speed < 0) {
                paddle.stop();
            }
        })
        rightBtn.addEventListener("mousedown", event => {
            paddle.moveRight();
        })
        rightBtn.addEventListener("mouseup", event => {
            if (paddle.speed > 0) {
                paddle.stop();
            }
        })
        startBtn.addEventListener("click", event => {
            if (ball.state !== "moving") {
                ball.start();
            }
        })
        //TOUCH
        leftBtn.addEventListener("pointerdown", event => {
            paddle.moveLeft();
        })
        leftBtn.addEventListener("pointerup", event => {
            if (paddle.speed < 0) {
                paddle.stop();
            }
        })
        rightBtn.addEventListener("pointerdown", event => {
            paddle.moveRight();
        })
        rightBtn.addEventListener("pointerup", event => {
            if (paddle.speed > 0) {
                paddle.stop();
            }
        })
    }
}