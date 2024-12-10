document.addEventListener('DOMContentLoaded', function () {
  // Product data
  const products = [
    { id: 1, name: 'SmartPhone', category: 'Electronics' },
    { id: 2, name: 'Laptop', category: 'Electronics' },
    { id: 3, name: 'T-shirt', category: 'Clothing' },
    { id: 4, name: 'Jeans', category: 'Clothing' },
    { id: 5, name: 'Headphones', category: 'Electronics' },
    { id: 6, name: 'Shoes', category: 'Foot Wears' },
  ];

  // Createing DOM interactions
  const productSection = document.getElementById('product-section');
  const filterElectronics = document.getElementById('filter-electronics');
  const filterClothing = document.getElementById('filter-clothing');
  const filterAll = document.getElementById('filter-all');
  const filterCombo = document.getElementById('filter-combo');

  // Display Functions
  function displayProducts(productList) {
    productSection.innerHTML = '';
    if (productList.length == 0) {
      productSection.innerHTML = `<p class="no-result">No products found.</p>`;
      return;
    }

    productList.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `<h2>${product.name}</h2><p>Category: ${product.category}</p>`;
      productSection.appendChild(productDiv);
    });
  }

  function filterByCategories(categories) {
    return this.filter((product) => categories.includes(product.category));
  }

  filterElectronics.addEventListener('click', function () {
    const filteredProducts = filterByCategories.call(products, ['Electronics']);
    displayProducts(filteredProducts);
  });

  filterClothing.addEventListener('click', function () {
    const filteredProducts = filterByCategories.call(products, ['Clothing']);
    displayProducts(filteredProducts);
  });

  filterAll.addEventListener('click', function () {
    displayProducts(products);
  });

  filterCombo.addEventListener('click', function () {
    const filteredProducts = filterByCategories.apply(products, [
      ['Electronics', 'Clothing'],
    ]);
    displayProducts(filteredProducts);
  });

  displayProducts(products);
});
