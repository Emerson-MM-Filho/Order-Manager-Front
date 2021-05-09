const saveOrders = () => {
    const allClients = document.querySelectorAll('.orderClientName')
    const allOrders = document.querySelectorAll('.orderClientOrder')

    const clientsSaveds = []
    const ordersSaveds = []

    if (clientOrder.value !== '' && clientName.value !== '') {

        if (allClients !== null && allOrders !== null) {
            for (let index = 0.; index < allClients.length; index += 1) {
                clientsSaveds.push(allClients[index].innerText)
                ordersSaveds.push(allOrders[index].classList)
            }
    
        }
        localStorage.setItem('clients', clientsSaveds)
        localStorage.setItem('orders', ordersSaveds)
        
    }
}
