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
        this.length = 100;
        this.height = 40;
    }

    drawDesk(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "Red";
        ctx.fillRect(this.xPos, this.yPos, this.length, this.height);
    }
}