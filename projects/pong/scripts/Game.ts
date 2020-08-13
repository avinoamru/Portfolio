const canvas: HTMLCanvasElement = document.createElement("canvas");
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
const canvasContainer: HTMLElement = document.querySelector(
  ".canvas-container"
);
canvasContainer.appendChild(canvas);

let winWidth: number = window.innerWidth * 0.95;
let winHeight: number = window.innerHeight * 0.95;

class Player {
  positionX: number;
  positionY: number;
  color: string = "rgb(255,255,255)";
  width: number = 10;
  height: number = winHeight * 0.1;
  constructor(x: number, y: number) {
    this.positionX = x;
    this.positionY = y;
  }
}

const Ball: {
  x: number;
  y: number;
  radius: number;
  vel: number;
} = {
  x: winWidth / 2,
  y: winHeight / 2,
  radius: null,
  vel: 10,
};

const player1 = new Player(50, winHeight / 2);
const player2 = new Player(winWidth - 50, winHeight / 2);
Ball.radius = player1.height / 8;

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) return;

  switch (e.key) {
    case "ArrowUp":
      player1.positionY -= winHeight / 100;
      break;

    case "ArrowDown":
      player1.positionY += winHeight / 100;
      break;

    default:
      console.log(`Invalid key: ''${e.key}''`);
  }
}); 
const random: number = Math.floor(Math.random() * 2) + 1;
console.log(random);
const Game = (): void => {
  winWidth = window.innerWidth * 0.95;
  winHeight = window.innerHeight * 0.95;

  canvas.width = winWidth;
  canvas.height = winHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(
    player1.positionX,
    player1.positionY,
    player1.width,
    player1.height
  );
  ctx.fillRect(
    player2.positionX,
    player2.positionY,
    player2.width,
    player2.height
  );
  ctx.arc(Ball.x, Ball.y, Ball.radius, 0, Math.PI * 2, false);
  ctx.fill();
  (function ballMovement(): void {
    if (random === 1) Ball.vel = -Ball.vel;
    console.log(Ball.vel);

    Ball.x += Ball.vel;
  })();

  const gameAnimation = requestAnimationFrame(Game);

  window.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) cancelAnimationFrame(gameAnimation);
  });
};

Game();
