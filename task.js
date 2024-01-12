<<<<<<< HEAD

document.addEventListener("DOMContentLoaded",function(){
    fetchedData('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
})


function fetchedData(category){
    const apiUrl = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json'
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        renderProducts(jsonData.categories,category)
    })
}

function renderProducts(data,category){
    const products = Array.isArray(data) ? data : data.products || [];

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach((product) => {
      if (product.category_name === category){
       const productCard =  createProductCard(product.category_products)
       console.log(productCard)
       productContainer.appendChild(productCard)
      }
      
    });
}

function calculateDiscount(price, comparePrice) {
    const discount = ((comparePrice - price) / comparePrice) * 100;
    return Math.round(discount);
}


function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    console.log(product)

    product.map((item) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item'
        productCard.appendChild(productItem)
        
        const productImage = document.createElement('div');
        productImage.style.backgroundImage = `url(${item.image})`;
        productImage.className = 'product-image'

        
        if (item.badge_text !== null){
            const badge = document.createElement('p');
            badge.textContent = item.badge_text;
            badge.className = 'badge';
            productImage.appendChild(badge);
        }
        
       const titleAndVendor = document.createElement('div');
       titleAndVendor.className = 'title-and-vendor'
       
       const title = document.createElement('h3');
       if(item.title.length < 11){
        title.textContent = item.title + " .";
       }else{
        title.textContent = item.title.slice(0,11) + ".. ."
       }
       
       const vendor = document.createElement('p');
       vendor.className = 'vendor'
       vendor.textContent = item.vendor;

       
       
       const pricesContainer = document.createElement('div');
       pricesContainer.className = 'prices-container'
       
       const price = document.createElement('p');
       price.textContent = 'Rs ' + item.price;
       
       const comparePrice = document.createElement('p');
       comparePrice.textContent = item.compare_at_price;
       comparePrice.className = 'compare-price';
       
       const discount = document.createElement('p');
       const discountValue = calculateDiscount(item.price, item.compare_at_price);
       discount.textContent = discountValue + '% off';
       discount.className = 'discount';

       const addToCartButton = document.createElement('button');
       addToCartButton.textContent = 'Add to Cart';
       addToCartButton.className = 'add-to-cart-button';
       
       titleAndVendor.appendChild(title);
       titleAndVendor.appendChild(vendor);
       
       pricesContainer.appendChild(price);
       pricesContainer.appendChild(comparePrice);
       pricesContainer.appendChild(discount)
       
       productItem.appendChild(productImage);
       productItem.appendChild(titleAndVendor);
       productItem.appendChild(pricesContainer);
       productItem.appendChild(addToCartButton);
       

    })

    return productCard
}



function showCategory(category,id){
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button){
        button.classList.remove('tab-button');
    });

    var clickedButton = document.getElementById(id);
    clickedButton.classList.add('tab-button')
    fetchedData(category)

=======

document.addEventListener("DOMContentLoaded",function(){
    fetchedData('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
})


function fetchedData(category){
    const apiUrl = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json'
    fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        renderProducts(jsonData.categories,category)
    })
}

function renderProducts(data,category){
    const products = Array.isArray(data) ? data : data.products || [];

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach((product) => {
      if (product.category_name === category){
       const productCard =  createProductCard(product.category_products)
       console.log(productCard)
       productContainer.appendChild(productCard)
      }
      
    });
}

function calculateDiscount(price, comparePrice) {
    const discount = ((comparePrice - price) / comparePrice) * 100;
    return Math.round(discount);
}


function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    console.log(product)

    product.map((item) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item'
        productCard.appendChild(productItem)
        
        const productImage = document.createElement('div');
        productImage.style.backgroundImage = `url(${item.image})`;
        productImage.className = 'product-image'

        
        if (item.badge_text !== null){
            const badge = document.createElement('p');
            badge.textContent = item.badge_text;
            badge.className = 'badge';
            productImage.appendChild(badge);
        }
        
       const titleAndVendor = document.createElement('div');
       titleAndVendor.className = 'title-and-vendor'
       
       const title = document.createElement('h3');
       if(item.title.length < 11){
        title.textContent = item.title + " .";
       }else{
        title.textContent = item.title.slice(0,11) + ".. ."
       }
       
       const vendor = document.createElement('p');
       vendor.className = 'vendor'
       vendor.textContent = item.vendor;

       
       
       const pricesContainer = document.createElement('div');
       pricesContainer.className = 'prices-container'
       
       const price = document.createElement('p');
       price.textContent = 'Rs ' + item.price;
       
       const comparePrice = document.createElement('p');
       comparePrice.textContent = item.compare_at_price;
       comparePrice.className = 'compare-price';
       
       const discount = document.createElement('p');
       const discountValue = calculateDiscount(item.price, item.compare_at_price);
       discount.textContent = discountValue + '% off';
       discount.className = 'discount';

       const addToCartButton = document.createElement('button');
       addToCartButton.textContent = 'Add to Cart';
       addToCartButton.className = 'add-to-cart-button';
       
       titleAndVendor.appendChild(title);
       titleAndVendor.appendChild(vendor);
       
       pricesContainer.appendChild(price);
       pricesContainer.appendChild(comparePrice);
       pricesContainer.appendChild(discount)
       
       productItem.appendChild(productImage);
       productItem.appendChild(titleAndVendor);
       productItem.appendChild(pricesContainer);
       productItem.appendChild(addToCartButton);
       

    })

    return productCard
}



function showCategory(category,id){
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button){
        button.classList.remove('tab-button');
    });

    var clickedButton = document.getElementById(id);
    clickedButton.classList.add('tab-button')
    fetchedData(category)

>>>>>>> 881ebea287e32b64231714cf900235046ca18912
}