const addToLocalStorage = () => {
    const getProductName = document.getElementById('input-product-name');
    const product = getProductName.value;
    const getProductPrice = document.getElementById('input-product-value');
    const productPrice = getProductPrice.value;

    // Set item to localStorage
    if (product && productPrice) {
        localStorage.setItem(product, productPrice)
    } else {
        alert('Please fill two input fields');
    }
}