// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const listEl = document.querySelector('#categories');
console.log('Number of categories:', listEl.children.length);

const itemEl = document.querySelectorAll('.item');

itemEl.forEach(group => {
  console.log('Category :', group.firstElementChild.textContent)
  console.log('Elements :', group.lastElementChild.children.length)
});