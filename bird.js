import { Animal } from "./animal.js";

export class Bird extends Animal {
  canFly;

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.canFly = canFly;
    Animal.remainingAnimals++;
  }

  attack(target) {
    if (this.energy <= 0) {
      return;
    }
    console.log(`${this.name} swoops down on ${target.name}!`);
    target.energy -= 20;
    console.log(
      `${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`
    );
    super.attack(target);
  }
}
