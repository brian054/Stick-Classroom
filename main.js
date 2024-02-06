/*

What we need to figure out
- Window dim's
- Player Sprite
- Controls
- Collision with desks and walls
- Teacher AI
- Levels

Separate Project Idea:
Hmmmm now I'm thinking 2d tile rpg right - hmmm we 
could do a more story driven thing there - like an rpg
where you go through and cheat your way through school - bet.
    - TODO: 2d TileRPG engine in JS, 2d RPG in MonoGame, pick whichever you like more

    
    Not sure yet but might need this: 
    https://www.tutorialspoint.com/HTML5-Canvas-fit-to-window#:~:text=Width%20and%20height%20of%20canvas,and%20width%20value%20to%20100%25.
    Need to fit the game per window size? Idk research into distribution methods i think Electron is one of them, might resize for you.


*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameWindowWidth = canvas.width;
const gameWindowHeight = canvas.height;

let playerX = 450;
let playerY = 450;
const playerWidth = 30;
const playerHeight = 30;
const playerSpeed = 1.2;

let playerMovingUp = false;
let playerMovingDown = false;
let playerMovingLeft = false;
let playerMovingRight = false;
let playerCollidingRight = false;
let playerCollidingLeft = false;
let playerCollidingUp = false;
let playerCollidingDown = false;

let friendX = gameWindowWidth - 150;
let friendY = gameWindowHeight - 200;

// Maybe create InputHandler class to clean this up
// Handle Input - you don't want this in the update method since it adds a new event listener every frame, 
document.addEventListener('keydown', function(event) {
    // switch or nah???
    if (event.code === "KeyW") {
        playerMovingUp = true;
    } 
    if (event.code === "KeyA") {
        playerMovingLeft = true;
    }
    if (event.code === "KeyS") {
        playerMovingDown = true;
    }
    if (event.code === "KeyD") {
        playerMovingRight = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === "KeyW") {
        playerMovingUp = false;
    } 
    if (event.code === "KeyA") {
        playerMovingLeft = false;
    }
    if (event.code === "KeyS") {
        playerMovingDown = false;
    }
    if (event.code === "KeyD") {
        playerMovingRight = false;
    }
});

// Update Stuff
function update() {
    // Update Logic

    // Handle Input
    if (playerMovingUp && !playerCollidingUp) {
        console.log("Up");
        playerY -= playerSpeed;
    }
    if (playerMovingDown && !playerCollidingDown) {
        console.log("Down");
        playerY += playerSpeed;
    }
    if (playerMovingLeft && !playerCollidingLeft) {
        console.log("Left");
        playerX -= playerSpeed;
    }
    if (playerMovingRight && !playerCollidingRight) {
        console.log("Right");
        playerX += playerSpeed;
    }

    // Check Collision
    if (AABB_Collision(playerX, playerY, playerWidth, playerHeight,
                    friendX, friendY, playerWidth, playerHeight)) {
        
        // so if the player position_x is more than classmates pos_X and colliding
        //  then restrict player from movingLeft
        // would diagonal movement cause problems here???

        // hmmm issues:
        // - can't move left and right when collideUp - i move one step and then can't move any further
        // - same when collideDown, same with collideLeft and Right
        // Troubleshoot tomorrow im too tired to do it today its probably something small
        // Ahhh wait how about modifying the AABB collision to return the collision direction
        // and movement direction or whatever we need
        if (playerMovingLeft) {
            if (playerX < friendX + playerWidth) { 
                playerCollidingLeft = true;
                playerMovingLeft = false;
            } 
        } 
        if (playerMovingRight) {
            if (playerX + playerWidth > friendX) {
                playerCollidingRight = true;
                playerMovingRight = false;
            }
        } 
        if (playerMovingUp) {
            if (playerY < friendY + playerHeight) {
                playerCollidingUp = true;
                playerMovingUp = false;
            }
        } 
        if (playerMovingDown) {
            if (playerY + playerHeight > friendY) {
                playerCollidingDown = true;
                playerMovingDown = false;
            }
        }
    } else {
        playerCollidingUp = false;
        playerCollidingDown = false
        playerCollidingLeft = false;
        playerCollidingRight = false;   
    }

    // Call Render
    render();
    
    // Recursively called every frame
    requestAnimationFrame(update);
}

// Draw Stuff
function render() {
    ctx.clearRect(0, 0, gameWindowWidth, gameWindowHeight);

    ctx.beginPath();
    ctx.fillStyle = "red";

    // Player
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    // Classmate
    ctx.fillStyle = "blue";
    ctx.fillRect(friendX, friendY, playerWidth, playerHeight);

    ctx.stroke();
}

// public static main void args blah blah 
requestAnimationFrame(update);