const categoriesList = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesList.length);

categoriesList.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;
  console.log("Category:", categoryName);
  console.log("Elements", categoryElements);
});
