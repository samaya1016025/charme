document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product');
            const productName = product.dataset.name;
            const productPrice = product.dataset.price;
            alert(`¡Has comprado ${productName} por $${productPrice}!`);
        });
    });
});
