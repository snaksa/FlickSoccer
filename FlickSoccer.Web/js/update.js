
var ballY = HEIGHT;
var ballX = WIDTH / 2;

var ballTop = 3,
    ballSide = -2,
    ballWidth = 0.2,
    ballHeight = 0.2;


function UpdateBall() {
    ballY -= ballTop;
    ballX += ballSide;
    ball.drawWidth -= ballWidth;
    ball.drawHeight -= ballHeight;
    if (ballY < -100) drawBall = false;
}