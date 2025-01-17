import { Animal } from "./animal.js";

export class Mammal extends Animal {
  furColor;

  constructor(name, species, furColor) {
    super(name, species, 200);
    this.furColor = furColor;
    Animal.remainingAnimals++;
  }

  attack(target) {
    if (this.energy <= 0) {
      return;
    }
    console.log(`${this.name} pounces on ${target.name}!`);
    target.energy -= 50;
    console.log(
      `${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`
    );
    super.attack(target);
  }
}
