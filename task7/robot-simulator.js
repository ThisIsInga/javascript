//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = 'N';
  }

  get bearing() {
    return this.direction;
  }

  get coordinates() {
    return { x: this.x, y: this.y };
  }

  place({ x, y, direction }) {
    const validDirections = ['N', 'E', 'S', 'W'];
    if (validDirections.includes(direction)) {
      this.x = x;
      this.y = y;
      this.direction = direction;
    } else {
      throw new InvalidInputError('Неверное направление');
    }
  }

  evaluate(instructions) {
    for (let instruction of instructions) {
      if (instruction === 'R') {
        this.turnRight();
      } else if (instruction === 'L') {
        this.turnLeft();
      } else if (instruction === 'A') {
        this.moveForward();
      } else {
        throw new InvalidInputError('Неверная инструкция');
      }
    }
  }

  turnRight() {
    const directions = ['N', 'E', 'S', 'W'];
    const currentDirIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentDirIndex + 1) % 4];
  }

  turnLeft() {
    const directions = ['N', 'E', 'S', 'W'];
    const currentDirIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentDirIndex + 3) % 4];
  }

  moveForward() {
    switch (this.direction) {
      case 'N':
        this.y += 1;
        break;
      case 'E':
        this.x += 1;
        break;
      case 'S':
        this.y -= 1;
        break;
      case 'W':
        this.x -= 1;
        break;
    }
  }
}