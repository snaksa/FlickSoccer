
var ballY = HEIGHT;
var ballX = WIDTH / 2;

function UpdateBall(ballTop, ballSide, ballWidth, ballHeight) {
    ballY -= ballTop;
    ballX += ballSide;
    ball.drawWidth -= ballWidth;
    ball.drawHeight -= ballHeight;
    if (ballY < -100) drawBall = false;
}