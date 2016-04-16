var

// Sprite vars //
ball,
grass,
goal,
banner,
fans,
s_enemyShips = [];

/**
 * Simple sprite class
 * 
 * @param {Image}  img    spritesheet image
 * @param {number} x      x-position in spritesheet
 * @param {number} y      y-position in spritesheet
 * @param {number} width  width of sprite 
 * @param {number} height height of sprite
 * @param {number} drawWidth drawWidth of sprite
 * @param {number} drawHeight drawHeight of sprite
 */
function Sprite(img, x, y, width, height, drawWidth, drawHeight) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.drawWidth = drawWidth;
	this.drawHeight = drawHeight;
};
/**
 * Draw sprite ta canvas context
 * 
 * @param  {CanvasRenderingContext2D} ctx context used for drawing
 * @param  {number} x   x-position on canvas to draw from
 * @param  {number} y   y-position on canvas to draw from
 */
Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(
		this.img, 
		this.x, 
		this.y, 
		this.width, 
		this.height,
		x, 
		y, 
		this.drawWidth, 
		this.drawHeight);
};

/**
 * Initate all sprite
 * 
 * @param  {Image} img spritesheet image
 */
function initSprites(img) {
    ball = new Sprite(img, 39, 792, 420, 418, 50, 50);
    grass = new Sprite(img, 0, 258, 333, 500, 80, 150);
    goal = new Sprite(img, 343, 258, 400, 145, window.innerWidth / 1.5, window.innerHeight / 2.5);
    banner = new Sprite(img, 0, 0, 3000, 248, window.innerWidth, window.innerHeight / 10);
    fans = new Sprite(img, 343.5, 445, 940, 285, window.innerWidth / 4, window.innerHeight / 8);
}