export class ClassA {
  #name;
  #age;
  constructor(name, age) {
    this.#age = age;
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}
