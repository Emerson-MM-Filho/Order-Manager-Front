const saveOrders = () => {
    const allClients = document.querySelectorAll('.orderClientName')
    const allOrders = document.querySelectorAll('.orderClientOrder')

    const clientsSaveds = []
    const ordersSaveds = []

    if (allClients.value !== null && allOrders.value !== null) {

        if (allClients !== null && allOrders !== null) {
            for (let index = 0.; index < allClients.length; index += 1) {
                clientsSaveds.push(allClients[index].innerText)
                ordersSaveds.push(allOrders[index].innerText)
            }
    
        }
        localStorage.setItem('clients', clientsSaveds)
        localStorage.setItem('orders', ordersSaveds)
        
    }
}
