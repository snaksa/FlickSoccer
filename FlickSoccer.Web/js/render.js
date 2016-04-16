var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var grassY, bannerY;

function DrawGrass(ctx) {
    var topX = 0;
    var topY = HEIGHT - grass.drawHeight;
    while (topY > HEIGHT / 4) {
        while (topX < WIDTH) {
            grass.draw(ctx, topX, topY);
            topX += grass.drawWidth;
        }
        grassY = topY;

        topX = 0;
        topY -= grass.drawHeight;
    }
}

function DrawGoal(ctx) {
    var topX = WIDTH / 2 - goal.drawWidth / 2;
    var topY = grassY - goal.drawHeight + 80;
    goal.draw(ctx, topX, topY);
}

function DrawBanner(ctx) {
    var topX = 0;
    var topY = grassY - banner.drawHeight;
    bannerY = topY;
    banner.draw(ctx, topX, topY);
}

function DrawFans(ctx) {
    var topX = 0;
    var topY = bannerY - fans.drawHeight;

    while (topX < WIDTH) {
        fans.draw(ctx, topX, topY);
        topX += fans.drawWidth;
    }
}

function DrawBall(ctx) {
    ball.draw(ctx, ballX, ballY);
}