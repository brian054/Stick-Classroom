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

// Refactor player like this
// player = { x: 450, ..... dx: 0, dy: 0}
// access via . operator (player.x, player.dy)
let playerX = 450;
let playerY = 450;
const playerWidth = 30;
const playerHeight = 30;
const playerSpeed = 1.2;
let playerDX = 0;
let playerDY = 0;

let friendX = gameWindowWidth - 150;
let friendY = gameWindowHeight - 200;

// Maybe create InputHandler class to clean this up
// Handle Input - you don't want this in the update method since it adds a new event listener every frame, 
document.addEventListener('keyup', function(event) {
    // switch or nah???
    if (event.code === "KeyW" || event.code === "KeyS") {
        playerDY = 0;
    } 
    if (event.code === "KeyA" || event.code === "KeyD") {
        playerDX = 0;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code === "KeyW") {
        playerDY = -1;
    } 
    if (event.code === "KeyA") {
        playerDX = -1;
    }
    if (event.code === "KeyS") {
        playerDY = 1;
    }
    if (event.code === "KeyD") {
        playerDX = 1;
    }
});

// Update Stuff
function update() {
    // Update Logic
    var playerNextX = playerX + playerDX;
    var playerNextY = playerY + playerDY;

    // Check Collision
    if (!AABB_Collision(playerNextX, playerNextY, playerWidth, playerHeight,
                    friendX, friendY, playerWidth, playerHeight)) {

        // No collision = update position
        playerX = playerNextX;
        playerY = playerNextY;
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
