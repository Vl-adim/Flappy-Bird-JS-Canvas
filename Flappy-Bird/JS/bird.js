import Canvas from "./canvas.js";
import Config from "./config.js";

export default class Bird {
  constructor() {
    this.canvas = new Canvas();
    this.config = new Config();

    this.imageBird = new Image();
    this.imageBird.src = "Images/bird.png";

    this.flyBird = new Audio();
    this.flyBird.src = "audio/fly.wav";

    this.dieBird = new Audio();
    this.dieBird.src = "audio/die.wav";

    this.birdWidth = 35;
    this.birdHeight = 25;
    this.birdJump = 40;

    this.birdX = 0;
    this.birdPositionX = this.canvas.element.width / 2 - this.birdWidth / 2;

    this.birdY;
    this.birdPositionY = 239;

    this.control();
  }

  updata() {
    this.birdPositionY += this.config.gravity;

    if (this.birdPositionY <= 0) {
      this.birdPositionY += this.birdJump;
    }
  }

  draw() {
    this.config.index += 0.3;
    this.birdY = Math.floor((this.config.index % 9) / 3) * (this.birdWidth - 9);

    this.canvas.context.drawImage(
      this.imageBird,
      this.birdX,
      this.birdY,
      this.birdWidth,
      this.birdHeight,
      this.birdPositionX,
      this.birdPositionY,
      this.birdWidth,
      this.birdHeight
    );
  }

  control() {
    if (document.documentElement.clientWidth > 1080) {
      this.canvas.element.addEventListener("click", () => {
        this.birdPositionY -= this.birdJump;
        this.flyBird.play();
      });
    } else {
      this.canvas.element.addEventListener("touchstart", () => {
        this.birdPositionY -= this.birdJump;
        this.flyBird.play();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.KeyboardEvent.keyCode === 32) {
        this.birdPositionY -= this.birdJump;
        this.flyBird.play();
      }
    });
  }
}
