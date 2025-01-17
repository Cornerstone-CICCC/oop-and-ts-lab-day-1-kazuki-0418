import { Animal } from "./animal.js";

export class Reptile extends Animal {
  coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.coldBlooded = coldBlooded;
    Animal.remainingAnimals++;
  }

  attack(target) {
    if (this.energy <= 0) {
      return;
    }

    console.log(`${this.name} bites ${target.name}!`);

    target.energy -= 30;
    console.log(
      `${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`
    );

    super.attack(target);
  }
}
