import Brick from "./brick.js";

export function build(game, level) {
    let bricks = [];
    level.forEach((row, rowIndex) => {
        return row.forEach((brick, brickIndex) => {
            const position = {
                x: 80 * brickIndex,
                y: 40 * rowIndex + 50,
            }
            if (brick === 1) {
                bricks.push(new Brick(game, position, "brick"))
            } else if (brick === 2) {
                bricks.push(new Brick(game, position, "plus1"))
            }
        })
    })
    return bricks;
}

export const level1 = [
    [1,0,0,1,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,2,1,1,2,1,1,1],
    [1,1,1,1,2,2,2,1,1,1],
]

export const testlevel = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,1],
    [0,0,0,0],
    [0,0,0,0],
]