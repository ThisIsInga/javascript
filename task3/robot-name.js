export class Robot {
  static existingNames = new Set();

  constructor() {
      this.reset();
  }

  reset() {
      let newName;
      do {
          newName = Robot.generateName();
      } while (Robot.existingNames.has(newName));
      
      this._name = newName;
      Robot.existingNames.add(this._name);
  }

  static generateName() {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let oneWord = alphabet[Math.floor(Math.random() * alphabet.length)];
      let twoWord = alphabet[Math.floor(Math.random() * alphabet.length)];
      let numOne = Math.floor(Math.random() * 10);
      let numTwo = Math.floor(Math.random() * 10);
      let numThree = Math.floor(Math.random() * 10);
      return `${oneWord}${twoWord}${numOne}${numTwo}${numThree}`;
  }

  get name() {
      return this._name;
  }

  set name(value) {
      throw new Error("Robot name cannot be modified");
  }

  static releaseNames(name) {
      if (Robot.existingNames.has(name)) {
          Robot.existingNames.delete(name);
      }
  }
}
