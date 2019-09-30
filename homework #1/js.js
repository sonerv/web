let canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d");

function drawLine(angle) {
  let R = 300 / 2;
    let pX = Math.cos(angle) * R;
    let pY = -Math.sin(angle) * R;
    let qX = 0.9 * pX;
    let qY = 0.9 * pY;
    pX += R; pY += R;
    qX += R; qY += R;
    let line = new Path2D();
    line.moveTo(pX, pY);
    line.lineTo(qX, qY);
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
  drawLine(angle);
}
  drawLine(secondsAngle);
  setTimeout(drawWatch, 1000);
}
drawWatch();
