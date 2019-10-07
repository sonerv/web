let canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d");

function drawLine(angle, a, b, width, style) {
  let R = 300 / 2;
    let pX = Math.cos(angle) * R;
    let pY = -Math.sin(angle) * R;
    let qX = a * pX;
    let qY = a * pY;
    pX *= b;
    pY *= b;
    pX += R; pY += R;
    qX += R; qY += R;
    let line = new Path2D();
    line.moveTo(pX, pY);
    line.lineTo(qX, qY);
    context.strokeStyle = style;
    context.lineWidth = width;
    context.stroke(line);
}

function drawWatch() {
  context.clearRect(0, 0, 300, 300);
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours, minutes, seconds);
  let secondsAngle = (seconds / 60) * (2 * Math.PI),
      minutesAngle = (minutes / 60) * (2 * Math.PI),
      hoursAngle =((hours % 12) / 12) * (2 * Math.PI);
  secondsAngle = Math.PI / 2 - secondsAngle;
  minutesAngle = Math.PI / 2 - minutesAngle;
  hoursAngle = Math.PI / 2 - hoursAngle;
  for (let d = 0; d < 60; ++d) {
    let angle = (d / 60) * (2 * Math.PI);
    drawLine(angle, 0.9, 1, 1, "black");
  }
  drawLine(secondsAngle, 0, 0.95, 2, 2, "black");
  drawLine(minutesAngle, 0, 0.75, 3, "black");
  drawLine(hoursAngle, 0, 0.6, 4, "black");
  setTimeout(drawWatch, 1000);
}

drawWatch();
