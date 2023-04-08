const classItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${classItem.length}`);

classItem.forEach(listEl => {
  console.log('');
  console.log(`Category: ${listEl.firstElementChild.textContent}`);
  console.log(
    `Elements: ${listEl.lastElementChild.children.length}`,
  );
});


