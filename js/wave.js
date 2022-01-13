(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("waveCanvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.008;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("waveCanvas2");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#EDF2F4", 1, 3, 0);
    draw.seconds = draw.seconds + 0.0065;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("waveCanvas3");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 95;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.005;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("waveCanvas4");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 95;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.006;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("waveCanvas5");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 95;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.005;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("waveCanvas6");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 95;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.006;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("waveCanvas7");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 95;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#edf2f4", 1, 3, 0);
    draw.seconds = draw.seconds + 0.006;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

