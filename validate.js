function validateForm(event) {
    event.preventDefault();

    const service = document.getElementById('serviceOption').value;
    const name = document.getElementById('custName').value.trim();
    const email = document.getElementById('custEmail').value.trim();
    const addr = document.getElementById('custAddr').value.trim();
    const payment = document.querySelector('input[name="payMethod"]:checked');

    let isAllValid = true;

    if (service === "") {
        document.getElementById('errService').style.display = 'block';
        isAllValid = false;
    } else {
        document.getElementById('errService').style.display = 'none';
    }

    if (name === "") {
        document.getElementById('errName').style.display = 'block';
        isAllValid = false;
    } else {
        document.getElementById('errName').style.display = 'none';
    }

    const adaSimbolAt = email.includes('@');
    const adaSimbolTitik = email.includes('.');

    if (adaSimbolAt === true && adaSimbolTitik === true) {
        document.getElementById('errEmail').style.display = 'none';
    } else {
        document.getElementById('errEmail').style.display = 'block';
        isAllValid = false;
    }

    if (addr.length < 15) {
        document.getElementById('errAddr').style.display = 'block';
        isAllValid = false;
    } else {
        document.getElementById('errAddr').style.display = 'none';
    }
    
    const phone = document.getElementById('custPhone').value.trim();

    if (phone.length < 10 || isNaN(phone)) {
        document.getElementById('errPhone').style.display = 'block';
        isAllValid = false;
    } else {
        document.getElementById('errPhone').style.display = 'none';
    }

    if (payment === null) {
        document.getElementById('errPay').style.display = 'block';
        isAllValid = false;
    } else {
        document.getElementById('errPay').style.display = 'none';
    }

    if (isAllValid === true) {
        alert("Order Success! Thank you " + name);
        localStorage.removeItem('eNVisionCart');
    }
}

function formatCurrency(value) {
    return `$${Number(value).toFixed(2)}`;
}

function getCartItems() {
    const saved = localStorage.getItem('eNVisionCart');

    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        } catch (error) {
            console.error('Invalid cart data:', error);
        }
    }

    return [{ name: 'Zero Frame', price: 50 }];
}

function updateCartCount() {
    const cartCountEl = document.getElementById('cartCount');

    if (!cartCountEl) {
        return;
    }

    const cartItems = getCartItems();
    const quantity = cartItems.reduce((total, item) => total + (Number(item.qty) || 1), 0);
    cartCountEl.textContent = quantity;
}

function renderOrderSummary() {
    const summaryList = document.getElementById('summaryList');
    const totalEl = document.getElementById('summaryTotal');

    if (!summaryList || !totalEl) {
        return;
    }

    const cartItems = getCartItems();
    let subtotal = 0;

    summaryList.innerHTML = cartItems.map((item, index) => {
        const amount = Number(item.price) * (Number(item.qty) || 1);
        subtotal += amount;
        return `<p>${index + 1}. ${item.name}: ${formatCurrency(amount)}</p>`;
    }).join('') + '<p>Shipping: $0.00</p>';

    totalEl.textContent = `Total: ${formatCurrency(subtotal)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderOrderSummary();

    const addButtons = document.querySelectorAll('.add-to-cart');

    addButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = Number(button.dataset.price);
            const currentCart = getCartItems();
            const existingItem = currentCart.find((item) => item.name === name);

            if (existingItem) {
                existingItem.qty = (Number(existingItem.qty) || 1) + 1;
            } else {
                currentCart.push({ name, price, qty: 1 });
            }

            localStorage.setItem('eNVisionCart', JSON.stringify(currentCart));
            updateCartCount();
            renderOrderSummary();
            button.textContent = 'Added';

            setTimeout(() => {
                button.textContent = 'Add to Cart';
            }, 800);
        });
    });
});