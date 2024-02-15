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
    } else {
        return false;
        // But wait why not just remove this else and have it return undefined?
        /*
            Well first of all, consistency across the code base. Returning a strict boolean makes intention clear.

            Second, type consistency: If this code base gets huge, or if you use this function in the future which 
            you always will for 2d games, meaning yes this code will be in huge code bases. Imagine the code base
            is 3000 files deep and you haven't looked at your AABB code for months and you have a new developer call the
            function without looking at it. Let's say this new dev uses the function in a strict comparison (=== or !===).
            Welp JavaScript doesn't consider === 'undefined' to be false. I know you always do (AABB() or !AABB()) where
            undefined would work, but you'll work on team code bases your whole life. So if someone is used to doing 
            if (AABB() === false) {} you need to structure your code to work with that. So long story short just return false
            it takes a second longer to type and potentially saves a ton of time to spend on other bugs. (I wasn't returning 
            false this whole time so I had to write a novel lol) 

            Note: Writing the tests brought this to my attention, so not only is writing tests going to make your code more 
            stable, it's also teaching you how to write more stable and robust code.

        */
    }
}

