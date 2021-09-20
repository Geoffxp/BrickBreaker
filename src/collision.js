import Ball from "./ball.js";

export function paddleCollision(ball, paddle) {
    if (distance(ball, paddle) <= 5) {
        const diff = paddle.center.x - ball.center.x
        const ratio = diff / -paddle.height
        ball.speed.x = ratio * 2
        ball.speed.y = -ball.speed.y
        return true;
    }
    return false;
}

function distance(ball, obj) {
    const dx = Math.abs(ball.center.x - obj.center.x);
    const dy = Math.abs(ball.center.y - obj.center.y);

    let l1 = (dx * obj.height) / (2 * dy);
    let l2 = obj.height / 2;

    if (l1 > obj.width / 2) {
        l1 = (dy * (obj.width)) / (2 * dx);
        l2 = obj.width / 2
    }

    const distance = Math.sqrt((dy ** 2) + (dx ** 2));
    const d2e = Math.sqrt((l1 ** 2) + (l2 ** 2));
    return distance - d2e - ball.size / 2
}

export function objCollision(ball, obj, game) {
    if (distance(ball, obj) <= 5) {
        if (obj.type && obj.type === "plus1") {
            game.addBall(new Ball(game, "moving"))
        }
        if (
            ball.center.y < obj.position.y + obj.height &&
            (ball.center.x < obj.position.x || ball.center.x > obj.position.x + obj.width)
        ) {
            ball.speed.x = -ball.speed.x
            return true;
        } else {
            ball.speed.y = -ball.speed.y;
            return true;
        }
    }
    return false
}

export function specialCollision(balls, obj, game) {
    let hit = 0
    balls.forEach(ball => {
        if (distance(ball, obj) <= 5) {
            if (obj.isPaddle) {
                if (!ball.hitPaddle) {
                    ball.hitPaddle = true;
                    paddleCollision(ball, obj);
                    hit++
                }
            } else {
                ball.hitPaddle = false;
                if (obj.type && obj.type === "plus1") {
                    game.addBall(new Ball(game, "moving"))
                }
                if (
                    ball.center.y < obj.position.y + obj.height &&
                    (ball.center.x < obj.position.x || ball.center.x > obj.position.x + obj.width)
                ) {
                    ball.speed.x = -ball.speed.x
                    hit++
                } else {
                    ball.speed.y = -ball.speed.y;
                    hit++
                }
            }
        }
    })
    return (hit > 0) ? true : false;
}