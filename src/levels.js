import Brick from "./brick.js";

export function build(game, level) {
    let bricks = [];
    if (level) {
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
                } else if (brick === 3) {
                    bricks.push(new Brick(game, position, "rocketBrick"))
                }
            })
        })
    }
    return bricks;
}

const level1 = [
    [1,2,3,2,1,1,2,3,2,1],
]
const level2 = [
    [1,0,0,1,0,0,1,0,0,1],
    [1,1,2,2,3,3,2,2,1,1],
]
const level3 = [
    [1,0,0,1,0,0,1,0,0,1],
    [1,1,2,1,1,1,1,2,1,1],
    [1,1,1,2,1,1,2,1,1,1],
    [1,1,1,3,2,2,3,1,1,1],
]
const level4 = [
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,2,1,1,1,1,2,1,0],
    [1,0,1,2,1,1,2,1,0,1],
    [0,1,1,1,3,2,3,1,1,0],
]
const level5 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,1,2,1,1,2,1,0,1],
    [1,1,3,3,2,2,3,3,1,1],
]
const level6 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,1,2,1,1,2,1,0,1],
    [1,1,3,3,2,2,3,3,1,1],
    [1,0,1,2,1,1,2,1,0,1],
]
const level7 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,3,3,2,2,3,3,1,1],
    [1,0,1,2,1,1,2,1,0,1],
]
const level8 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,2,2,2,2,2,2,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,3,3,2,2,3,3,1,1],
    [1,1,1,3,1,1,3,1,1,1],
]
const level9 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,2,1,2,1,2,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,3,1,3,1,1,3,1,3,1],
]
const level10 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,2,1,2,1,2,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,3,1,3,1,1,3,1,3,1],
    [2,2,2,2,2,2,2,2,2,2]
]


export const levels = [
    level1, 
    level2, 
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
]