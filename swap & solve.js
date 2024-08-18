window.onload = function() {
    document.getElementById('welcomePopup').style.display = 'flex';
}

// Submit name and display welcome message
function submitName() {
    const name = document.getElementById('userName').value;
    if (name) {
        document.getElementById('displayName').innerText = name;
        document.getElementById('welcomeMessage').style.display = 'block';
        document.getElementById('welcomePopup').style.display = 'none';
    }
}

window.onload = function() {
    var name = prompt("Please enter your name:");
    if (name) {
        alert(`Welcome, ${name}! Enjoy a 15% discount on the latest products!`);
    }

    document.getElementById('saveButton').addEventListener('click', function() {
        var signupName = document.getElementById('signupName').value;
        var signupEmail = document.getElementById('signupEmail').value;
        var signupPassword = document.getElementById('signupPassword').value;

        if (signupName && signupEmail && signupPassword) {
            alert("Customer successfully saved!");
        } else {
            alert("Please fill in all the fields.");
        }
    });
};
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const category = product.getAttribute('data-category').toLowerCase();
        if (category.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
