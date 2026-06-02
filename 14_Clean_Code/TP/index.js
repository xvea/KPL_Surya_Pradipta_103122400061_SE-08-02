const API_BASE_URL = 'https://example.com/api';

async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderDetails(orderId, token);
        displayOrderModal(order, token);
    } catch (error) {
        handleFetchError(error);
    }
}

async function getOrderDetails(orderId, token) {
    const response = await fetch(`${API_BASE_URL}/order/${orderId}`, {
        headers: {
            Authorization: token
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}

function displayOrderModal(order, token) {
    const modal = document.getElementById('orderModal');

    renderOrderDetails(modal, order);
    configureCloseButton(modal);
    configureConfirmButton(modal, order, token);

    showModal(modal);
}

function renderOrderDetails(modal, order) {
    const detailsDiv = modal.querySelector('#orderDetails');

    detailsDiv.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;
}

function configureCloseButton(modal) {
    const closeBtn = modal.querySelector('.close');

    closeBtn.onclick = () => {
        hideModal(modal);
    };
}

function configureConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    if (isDelivered(order)) {
        confirmBtn.style.display = 'none';
        return;
    }

    confirmBtn.style.display = 'block';

    confirmBtn.onclick = () => {
        confirmOrder(order.id, token);
    };
}

function isDelivered(order) {
    return order.status === 'Delivered';
}

function showModal(modal) {
    modal.style.display = 'block';
}

function hideModal(modal) {
    modal.style.display = 'none';
}

function handleFetchError(error) {
    console.error('Error:', error);
}