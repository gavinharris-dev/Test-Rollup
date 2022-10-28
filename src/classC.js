import { ClassA } from "./classA";

export class Test extends ClassA {
  #grade;

  constructor(name, age, grade) {
    super(name, age);
    this.#grade = grade;
  }

  get grade() {
    return this.#grade;
  }
}
