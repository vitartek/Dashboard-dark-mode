Orders.forEach (order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declinado' ? 'danger' : order.status === 'Pendiente' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Detalles</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});