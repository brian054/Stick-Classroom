/* 
note about export and modules

mainly want to use export and modules to avoid polluting our html file with a million
JS files. Luckily this game is super small so I'm just not gonna care about export and
modules until it becomes an issue or the code base gets huge for some reason.

*/
// Good ole aabb
export function AABB_Collision(rectX, rectY, rectWidth, rectHeight, rectX_1, rectY_1, rectWidth_1, rectHeight_1) {
    if (typeof rectX === 'undefined' || typeof rectY === 'undefined' || 
        typeof rectWidth === 'undefined' || typeof rectHeight === 'undefined' || 
        typeof rectX_1 === 'undefined' || typeof rectY_1 === 'undefined' ||
        typeof rectWidth_1 === 'undefined' || typeof rectHeight_1 === 'undefined') {
        throw new Error('AABB(): One or more parameters undefined.');
    }
    
    if (rectX < rectX_1 + rectWidth_1 && rectX + rectWidth > rectX_1 &&
        rectY < rectY_1 + rectHeight_1 && rectY + rectHeight > rectY_1) {
        return true;
    }
}