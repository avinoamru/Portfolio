var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var canvasContainer = document.querySelector(".canvas-container");
canvasContainer.appendChild(canvas);
var winWidth = window.innerWidth * 0.95;
var winHeight = window.innerHeight * 0.95;
var Player = /** @class */ (function () {
    function Player(x, y) {
        this.color = "rgb(255,255,255)";
        this.width = 10;
        this.height = winHeight * 0.1;
        this.positionX = x;
        this.positionY = y;
    }
    return Player;
}());
var Ball = {
    x: winWidth / 2,
    y: winHeight / 2,
    radius: null,
    vel: 10
};
var player1 = new Player(50, winHeight / 2);
var player2 = new Player(winWidth - 50, winHeight / 2);
Ball.radius = player1.height / 8;
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 32)
        return;
    switch (e.key) {
        case "ArrowUp":
            player1.positionY -= winHeight / 100;
            break;
        case "ArrowDown":
            player1.positionY += winHeight / 100;
            break;
        default:
            console.log("Invalid key: ''" + e.key + "''");
    }
});
var random = Math.floor(Math.random() * 2) + 1;
console.log(random);
var Game = function () {
    winWidth = window.innerWidth * 0.95;
    winHeight = window.innerHeight * 0.95;
    canvas.width = winWidth;
    canvas.height = winHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(player1.positionX, player1.positionY, player1.width, player1.height);
    ctx.fillRect(player2.positionX, player2.positionY, player2.width, player2.height);
    ctx.arc(Ball.x, Ball.y, Ball.radius, 0, Math.PI * 2, false);
    ctx.fill();
    (function ballMovement() {
        if (random === 1)
            Ball.vel = -Ball.vel;
        console.log(Ball.vel);
        Ball.x += Ball.vel;
    })();
    var gameAnimation = requestAnimationFrame(Game);
    window.addEventListener("keypress", function (e) {
        if (e.keyCode === 32)
            cancelAnimationFrame(gameAnimation);
    });
};
Game();
