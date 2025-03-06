document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const productList = document.querySelector('.product-list');
    const cartList = document.querySelector('.cart-list');
    const totalElement = document.getElementById('total');

    if (productList) {
        productList.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const product = e.target.closest('li');
                const productName = product.querySelector('h3').textContent;
                const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
                cart.push({ name: productName, price: productPrice });
                updateCart();
            }
        });
    }

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
            total += item.price;
        });
        totalElement.textContent = total.toFixed(2);
    }
});