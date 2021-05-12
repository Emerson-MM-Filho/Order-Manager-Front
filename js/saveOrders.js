const orders = JSON.parse(localStorage.getItem('orders')) || []

const saveOrders = (clientName, clientOrder) => {
    orders.push({client: clientName, orders: clientOrder})
    localStorage.setItem('orders', JSON.stringify(orders))
}