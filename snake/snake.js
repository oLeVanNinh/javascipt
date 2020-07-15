window.onload = function() {
  const CANVAS_BORDER_COLOR = "black";
  const CANBAS_BACKGROUND_COLOR = "white"
  const SNAKE_COLOR = "lightgreen";
  const SNAKE_BORDER_COLOR = "darkgreen";

  let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150},
  ]

  let dx = 10;
  let dy = 0;
  let foodX;
  let foodY;

  var gameCanvas = document.getElementById("gameCanvas");
  var ctx = gameCanvas.getContext("2d");


  ctx.fillStyle = CANBAS_BACKGROUND_COLOR;
  ctx.strockstyle = CANVAS_BORDER_COLOR;
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);


  function drawSnakePart(snakePart) {
    ctx.fillStyle = SNAKE_COLOR;
    ctx.strockstyle = SNAKE_BORDER_COLOR;
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  }

  function drawSnake() {
    snake.forEach(drawSnakePart)
  }

  function advanceSnake() {
    const oldHead = snake[0];
    const newX = newHeadCordinator(oldHead.x, dx);
    const newY = newHeadCordinator(oldHead.y, dy);
    const head = { x: newX, y: newY };
    console.log(head.x);
    snake.unshift(head);
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
      createFood();
      drawFood();
    }
    else {
      const tail = snake.pop();
      clearCanvas(tail);
    }

  }

  function newHeadCordinator(oldCordinate, step) {
    const newCordinate = oldCordinate + step;
    if (newCordinate >= 300) {
      return newCordinate - 300;
    }

    if (newCordinate < 0) {
      return 300 + newCordinate;
    }

    return newCordinate;
  }

  function clearCanvas(position) {
    ctx.fillStyle = CANBAS_BACKGROUND_COLOR;
    ctx.fillRect(position.x, position.y, 10, 10);
    ctx.strockstyle = CANVAS_BORDER_COLOR;
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
  }

  function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === - 10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    console.log('er')
    if (keyPressed == LEFT_KEY && !goingRight) {
      dx = -10;
      dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
      dx = 0;
      dy = -10;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
      dx = 10;
      dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
      dx = 0;
      dy = 10;
    }
  }

  function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
  }

  function createFood() {
    foodX = randomTen(0, gameCanvas.width - 10);
    foodY = randomTen(0, gameCanvas.height - 10);

    snake.forEach(function isFoodonSnake(part) {
      const foodIsOnSnake = part.x === foodX && part.y === foodY;
      if (foodIsOnSnake) {
        createFood();
      }
    })
  }

  function drawFood() {
    ctx.fillStyle = "red";
    ctx.strockstyle = "darkred";
    ctx.fillRect(foodX, foodY, 10, 10);
  }

  function moving() {
    setInterval(() => {
      advanceSnake();
      drawSnake();
    }, 100)
  }

  function start() {
    document.onkeydown = changeDirection;

    setTimeout(function onTick() {
      createFood();
      drawFood();
      advanceSnake();
      drawSnake();
      moving()
    }, 100)
  }

  start()
}
