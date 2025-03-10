function loadCatalog(query = '') {
  let apiUrl = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : 'https://dummyjson.com/products?limit=30&skip=30&select=title,description,images,price,id';
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      let catalog = document.getElementById('catalog');
      catalog.innerHTML = '';
      if (data.products.length === 0) {
        catalog.innerHTML = '<p>Нет результатов для данного запроса.</p>';
        return;
      }
      data.products.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${product.images[0]}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p class="price">$${product.price.toFixed(2)}</p>
        `;
        card.addEventListener('click', () => {
          openModal(product.id);
        });
        catalog.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
      let catalog = document.getElementById('catalog');
      catalog.innerHTML = '<p>Не удалось загрузить каталог продуктов.</p>';
    });
  }

function handleSearch() {
  let searchInput = document.getElementById('search-input').value.trim();
  loadCatalog(searchInput);
}

document.addEventListener('DOMContentLoaded', () => {
  loadCatalog();
  let searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', handleSearch)
})

function openModal(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
      document.getElementById('modal-product-image').src = product.images[0];
      document.getElementById('modal-product-title').textContent = product.title;
      document.getElementById('modal-product-description').textContent = product.description;
      document.getElementById('modal-product-price').textContent = `$${product.price.toFixed(2)}`;
      document.getElementById('product-modal').style.display = 'block';
    })
    .catch(error => {
      console.error('Ошибка при получении данных о товаре:', error);
    });
}

function closeModal() {
  document.getElementById('product-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  loadCatalog();
  document.getElementById('close-modal').addEventListener('click', closeModal);
  window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('product-modal')) {
      closeModal();
    }
  });
});