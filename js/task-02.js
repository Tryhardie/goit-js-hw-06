const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArray = [];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ingredient;
  ingredientsArray.push(liRef);
});

ingredientsList.append(...ingredientsArray);
