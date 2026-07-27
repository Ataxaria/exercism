// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

const prune = (a, b, screenSize) => {
  a -= (a + b) > screenSize ? (a + b) - screenSize : 0;
  return a;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  
  resize(size) {
    let { width, height } = size;
    [width, height] = [Math.max(1, width), Math.max(1, height)];
    [width, height] = [prune(width, this.position.x, this.screenSize.width), 
                       prune(height, this.position.y, this.screenSize.height)];
    this.size.resize(width, height);
  }

  move(position) {
    let { x, y } = position;
    [x, y] = [Math.max(0, x), Math.max(0, y)];
    [x, y] = [prune(x, this.size.width, this.screenSize.width), 
              prune(y, this.size.height, this.screenSize.height)];
    this.position.move(x, y);
  }
}

export function changeWindow(window) {
  window.resize(new Size(400, 300));
  window.move(new Position(100, 150));
  return window;
}