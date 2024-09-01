// Function to add item to cart
function addToCart(productName, productPrice, productImage) {
    // Get existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item
    cartItems.push({ name: productName, price: productPrice, image: productImage });

    // Save updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Optionally, show a success message
    alert(`${productName} has been added to your cart.`);
}

// Example usage: Attach this to your "Add to Cart" button
document.querySelectorAll('.btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get product info
        const card = button.closest('.card');
        const productName = card.querySelector('h1').textContent;
        const productImage = card.querySelector('img').src;
        const productPrice = "$5"; // Example price, you can add actual prices

        // Call the function
        addToCart(productName, productPrice, productImage);
    });
});
