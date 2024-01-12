// Count the number of categories
const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
// Display the total number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Find and display the header text and number of elements for each category
categoryItems.forEach(category => {
  const headerText = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');
  console.log(`Category: ${headerText}`);
  console.log(`Elements: ${categoryElements.length}`);
});