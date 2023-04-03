const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientAll = document.querySelector("#ingredients");
let ingredientArr = [];

ingredients.forEach(function(ingredient) {
  const liEL = document.createElement("li");
  liEL.textContent = ingredient;
  liEL.classList = "item";
  return ingredientArr.push(liEL); })


  ingredientAll.append(...ingredientArr);
