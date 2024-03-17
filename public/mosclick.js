

function clickEffect() {
  let balls = [];
  let longPressed = false;
  let longPress;
  let multiplier = 0;
  let width, height;
  let origin;
  let normal;
  let ctx;
  const colours = ["#458a4a", "#d6dbdc", "#e7c660", "#e7c660", "#FAF15D"];
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
  const pointer = document.createElement("span");
  pointer.classList.add("pointer");
  document.body.appendChild(pointer);

  if (canvas.getContext && window.addEventListener) {
    ctx = canvas.getContext("2d");
    updateSize();
    window.addEventListener('resize', updateSize, false);
    loop();
    window.addEventListener("mousedown", function (e) {
      miniBoom(e.clientX, e.clientY)
    }, false);
    window.addEventListener("mouseup", function (e) {
      bigBoom(e.clientX, e.clientY)
    }, false);
    window.addEventListener("mousemove", function (e) {
      let x = e.clientX;
      let y = e.clientY;
      pointer.style.top = y + "px";
      pointer.style.left = x + "px";
    }, false);
  } else {
    console.log("canvas or addEventListener is unsupported!");
  }


  function updateSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(1, 1);
    width = (canvas.width = window.innerWidth);
    height = (canvas.height = window.innerHeight);
    origin = {
      x: width / 2,
      y: height / 2
    };
    normal = {
      x: width / 2,
      y: height / 2
    };
  }
  class Ball {
    constructor(x = origin.x, y = origin.y) {
      this.x = x;
      this.y = y;
      this.angle = Math.PI * 2 * Math.random();
      if (longPressed == true) {
        this.multiplier = randBetween(6 + multiplier, 12 + multiplier);
      } else {
        this.multiplier = randBetween(4, 8);
      }
      this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
      this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
      this.r = randBetween(4, 7) + 3 * Math.random();
      this.color = colours[Math.floor(Math.random() * colours.length)];
    }
    update() {
      this.x += this.vx - normal.x;
      this.y += this.vy - normal.y;
      normal.x = -2 / window.innerWidth * Math.sin(this.angle);
      normal.y = -2 / window.innerHeight * Math.cos(this.angle);
      this.r -= 0.3;
      this.vx *= 0.9;
      this.vy *= 0.9;
    }
  }

  function pushBalls(count = 1, x = origin.x, y = origin.y) {
    for (let i = 0; i < count; i++) {
      balls.push(new Ball(x, y));
    }
  }

  function randBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  function loop() {
    ctx.fillStyle = "rgba(255, 255, 255, 0)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if (b.r < 0) continue;
      ctx.fillStyle = b.color;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
      ctx.fill();
      b.update();
    }
    if (longPressed == true) {
      multiplier += 0.2;
    } else if (!longPressed && multiplier >= 0) {
      multiplier -= 0.4;
    }
    removeBall();
    requestAnimationFrame(loop);
  }

  function removeBall() {
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
        balls.splice(i, 1);
      }
    }
  }

  function miniBoom(x, y) {
    pushBalls(randBetween(10, 20), x, y);
    document.body.classList.add("is-pressed");
    longPress = setTimeout(function () {
      document.body.classList.add("is-longpress");
      longPressed = true;
    }, 500);
  }

  function bigBoom(x, y) {
    clearInterval(longPress);
    if (longPressed == true) {
      document.body.classList.remove("is-longpress");
      pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), x, y);
      longPressed = false;
    }
    document.body.classList.remove("is-pressed");
  }

  function ranBoom(x, y, time) {
    miniBoom(x, y)
    setTimeout(() => {
      bigBoom(x, y)
    }, time)
  }
  function onloadFun() {
    let x = window.innerWidth;
    let y = window.innerHeight;

    ranBoom(x * 0.35 - x * 0.05 + randBetween(0, x * 0.10), y * 0.35 - y * 0.05 + randBetween(0, y * 0.10), 100)
    setTimeout(() => {
      miniBoom(x * 0.65 - x * 0.05 + randBetween(0, x * 0.10), y * 0.35 - y * 0.05 + randBetween(0, y * 0.10))
      setTimeout(() => {
        bigBoom(x * 0.5 - x * 0.05 + randBetween(0, x * 0.10), y * 0.2 - y * 0.025 + randBetween(0, y * 0.05))
      }, 501);
    }, 300);


  }

  window.onload = onloadFun();

}
clickEffect();//调用特效函数

