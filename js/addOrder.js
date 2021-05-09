const addOrder = () => {
    const clientName = document.querySelector('#clientName')
    const clientOrder = document.querySelector('#clientOrder')
    const addOrderButton = document.querySelector('#addClientOrder')

    let allOrders = []
    
    addOrderButton.addEventListener('click', () => {
        let newOrder = {
            client: clientName.value,
            order: clientOrder.value
        }

        allOrders.push(newOrder)
        localStorage.setItem('orders', allOrders)
    })
}