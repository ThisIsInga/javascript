//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergens = [
      { name: 'яйца', value: 1 },
      { name: 'арахис', value: 2 },
      { name: 'морепродукты', value: 4 },
      { name: 'клубника', value: 8 },
      { name: 'помидоры', value: 16 },
      { name: 'шоколад', value: 32 },
      { name: 'пыльца', value: 64 },
      { name: 'кошки', value: 128 },
    ];
  }

  list() {
    let allergiesList = [];
    for (let allergen of this.allergens) {
      if (this.score & allergen.value) {
        allergiesList.push(allergen.name);
      }
    }
    return allergiesList;
  }

  allergicTo(product) {
    for (let allergen of this.allergens) {
      if (allergen.name === product) {
        return (this.score & allergen.value) !== 0;
      }
    }
    return false;
  }
}
