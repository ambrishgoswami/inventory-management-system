document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');

    productForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productQuantity = document.getElementById('productQuantity').value;
        const productPrice = document.getElementById('productPrice').value;

        // Example of adding a product (this would be where you'd send data to the server)
        const productData = {
            name: productName,
            quantity: productQuantity,
            price: productPrice
        };

        // You'd likely send this data to a server via fetch/AJAX
        // Simulate adding product to the table
        addProductToTable(productData);

        // Reset the form
        productForm.reset();
    });

    function addProductToTable(product) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${Math.floor(Math.random() * 10000)}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        inventoryTableBody.appendChild(row);

        row.querySelector('.delete-btn').addEventListener('click', function () {
            row.remove();
        });
    }
});
