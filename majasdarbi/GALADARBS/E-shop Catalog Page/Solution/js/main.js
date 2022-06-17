let categoriesSelector  = document.getElementById('categories');
let productSelector     = document.getElementById('products');



function renderCategories(categories) {
    categories.forEach(category => {
        categoriesSelector.innerHTML += `<li class="e-shop__menu-item" data-category="${category}">${category}</li>`
    })
}

function renderProducts(data) {
    data.products.forEach(product => {
        productSelector.innerHTML += `
        <div class="e-shop__product-item">
            <img src="${product.images[0]}">
        </div>
        `
    })
}

function renderProductByCategory(e) {
    let categoryClicked = e.target.dataset.category;
    fetch(`https://dummyjson.com/products/category/${categoryClicked}`)
    .then(res => res.json())
    .then(data => renderProducts(data));
}

fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(categories => renderCategories(categories));

categoriesSelector.addEventListener('click', renderProductByCategory);


