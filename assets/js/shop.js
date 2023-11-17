const productListHtml = document.querySelector('.product-list');

const productList = [
  {
    id: 1,
    name:'LeBron Witness 8 EP',
    price: 500,
    image: './assets/images/1.webp'
  },
  {
    id: 2,
    name: 'Nike Ultrafly',
    price: 700,
    image: './assets/images/2.webp'
  },
  {
    id: 3,
    name: 'Nike Air Zoom TR 1',
    price: 1000,
    image: './assets/images/3.webp'
  },
  {
    id: 4,
    name: 'JA 1 EP Hunger',
    price: 590,
    image: './assets/images/4.webp'
  },
  {
    id: 5,
    name: 'Nike Cortez SE',
    price: 590,
    image: './assets/images/5.webp'
  },
  {
    id: 6,
    name:'Nike Air Max 1',
    price: 1000,
    image: './assets/images/6.webp'
  },
  {
    id: 7,
    name: 'Nike Air Max 1 86 OG G',
    price: 570,
    image: './assets/images/7.webp'
  },
  {
    id: 8,
    name: 'Nike Revolution 6',
    price: 690,
    image: './assets/images/8.webp'
  },
  {
    id: 9,
    name: 'Nike Metcon 8',
    price: 750,
    image: './assets/images/9.webp'
  },
  {
    id: 10,
    name: 'Sabrina 1 Magnetic EP',
    price: 900,
    image: './assets/images/10.webp'
  },
]

const productsCart = JSON.parse(localStorage.getItem('products-cart')) || [];

const handleRenderProductList = (products) => {
  
  const htmls = products.map(productItem => {
    return `
      <a href="#" class="product-item shadow-3 text-black radius-1">
        <div class="thumbnail">
          <img class="radius-top-1" src=${productItem.image} width="100%">
        </div>
        <div class="p-2">
          <h3 class="product-title">${productItem.name}</h3>
          <div class="d-flex justify-content-between align-items-end">
            <div class="d-flex align-items-end">
              <h5 class="product-price text-danger">${productItem.price}</h5>
              <i class="product-old-price text-grey mx-1">${productItem.price}</i>
            </div>
            <button class="add-cart" onclick="handleAddToCart(${productItem.id})">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </a>
    `
  })
  productListHtml.innerHTML = htmls.join('');
}

const handleAddToCart = (productId) => {
  const selectedProduct = productList.find(product => product.id == productId);

  productsCart.push(selectedProduct);
  localStorage.setItem('products-cart', JSON.stringify(productsCart));
}

const searchProducts = (searchStr) => {
  // if(!searchStr) {
  //   handleRenderProductList(productList);
  // }
  // else {
    const filteredProducts = productList.filter(product => {
      // Sử dụng hàm includes để kiểm tra xem tên sản phẩm có chứa chuỗi tìm kiếm không
      return product.name.toLowerCase().includes(searchStr.toLowerCase());
    });
    handleRenderProductList(filteredProducts);
  // }

}

const searchInput = document.querySelector('#search-input'); 
searchInput.addEventListener('input', (event) => {
  const searchStr = event.target.value;
  searchProducts(searchStr);
})

window.addEventListener("load", (event) => {
  handleRenderProductList(productList);
});

