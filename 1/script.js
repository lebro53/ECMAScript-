// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// array = [-1000, -1001, 5, 7, 9];
// const searchMinNUmberArray = (arr) => Math.min(...arr);
// console.log(searchMinNUmberArray(array));

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter() {
//   return {
//     value: 0,
//     increment() {
//       return (this.value += 1);
//     },
//     decrement() {
//       return (this.value -= 1);
//     },
//   };
// }

// const count = createCounter();
// console.log(count.value);
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.decrement());

// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(element, className) {
  if (element.classList.contains(className)) {
    // Если текущий элемент имеет искомый класс, возвращаем его
    return element;
  } else if (element.children && element.children.length > 0) {
    // Если у элемента есть дочерние элементы, рекурсивно ищем среди них
    let foundElement = null;
    for (let child of element.children) {
      foundElement = findElementByClass(child, className);
      if (foundElement) break; // Прерываем рекурсию, если нашли элемент
    }
    return foundElement;
  }
  // Если элемент не имеет искомого класса и у него нет дочерних элементов, возвращаем null
  return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
