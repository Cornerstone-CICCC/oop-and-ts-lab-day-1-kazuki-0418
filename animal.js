export class Animal {
  name;
  species;
  energy;

  static remainingAnimals = 0;

  constructor(name, species, energy) {
    this.name = name;
    this.species = species;
    this.energy = energy;
  }

  attack(target) {
    if (target.energy <= 0) {
      console.log(`${this.name} wins! ${target.name} is out of energy.`);
      Animal.remainingAnimals--;
    }
  }

  eat() {
    if (this.energy <= 0) {
      return;
    }

    this.energy += 10;
    console.log(`${this.name} eats and gains 10 energy.`);
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get species() {
    return this.species;
  }

  set species(species) {
    this.species = species;
  }

  get energy() {
    return this.energy;
  }

  set energy(energy) {
    this.energy = energy;
  }
}
const lion = new Animal("Simba", "Lion", 100);
