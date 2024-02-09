/*

Desks are just rectangles

Grid would be 3 x 5 desks
Use gameHeight and Width to determine desk positions

collision just AABB 
*/

export class Desk {
    constructor(x, y, ctx) {
        this.xPos = x;
        this.yPos = y;
        this.width = 100;
        this.height = 40;
        this.ctx = ctx;
    }

    drawDesk() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "Red";
        this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}