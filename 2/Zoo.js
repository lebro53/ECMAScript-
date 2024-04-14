// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

class ZooAnimal {
  static MAX_AGE = 50;

  #name;
  #age;
  #gender;

  constructor(name, age, gender) {
    this.#name = name;
    if (age > ZooAnimal.MAX_AGE)
      throw new Error("Max age must be greater then 50");
    this.#age = age;
    this.#gender = gender;
  }

  getName = () => this.#name;
  getAge = () => this.#age;
  getGendete = () => this.#gender;

  changeName = (newName) => (this.#name = newName);
  changeAge = (newAge) => {
    if (newAge > ZooAnimal.MAX_AGE) {
      throw new Error("Max age must be greater then 50");
    }
    this.#age = newAge;
  };
}

const animalInZoo = new ZooAnimal("Elephant", 30, "male");

console.log(animalInZoo.getName());
console.log(animalInZoo.getAge());
console.log(animalInZoo.getGendete());
animalInZoo.changeName("Potato");
console.log(animalInZoo.getName());
animalInZoo.changeAge(1);
console.log(animalInZoo.getAge());
animalInZoo.changeAge(100);
console.log(animalInZoo.getAge());
