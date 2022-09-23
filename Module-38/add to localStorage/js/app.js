const getId = id => {
    const getIdField = document.getElementById(id);
    const getIdValue = getIdField.value;
    return getIdValue;
}

const addProduct = () => {
    // Get Product Name
    const product = getId('product-field');

    // Get Quantity
    const quantity = getId('quantity-field');

    // Displaye Items on the ui
    displayItem(product, quantity);

    // Set Item to localStorage
    localStorage.setItem(product, quantity);
}

function displayItem(product, quantity) {
    const itemContainer = document.getElementById('li-container');
    const item = document.createElement('li');
    item.innerText = `${product}: ${quantity}`;
    itemContainer.appendChild(item);

}