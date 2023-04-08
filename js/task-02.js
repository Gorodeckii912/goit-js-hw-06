const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientAll = document.querySelector("#ingredients");


const ingredientArr = ingredients.map(ingredient => {
  const liEL = document.createElement("li");
  liEL.textContent = ingredient;
  liEL.classList = "item";
  return liEL;})


  ingredientAll.append(...ingredientArr);
