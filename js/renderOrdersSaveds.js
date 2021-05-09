const renderOrdersSaveds = () => {
    const clientsSavedsInLocal = localStorage.getItem('clients')
    const ordersSavedsInLocal = localStorage.getItem('orders')
    const orderList = document.querySelector('.orderList')

    
    if (clientsSavedsInLocal !== null && ordersSavedsInLocal !== null) {
        const clientsSaveds = clientsSavedsInLocal.split(',')
        const ordersSaveds = ordersSavedsInLocal.split(',')

        for (let index = 0; index < clientsSaveds.length; index += 1) {
            // create container
            const orderContainer = document.createElement('div')
            orderContainer.classList.toggle('orderContainer')
            orderList.appendChild(orderContainer)
            

            // create client name
            const clientName = document.createElement('h3')
            clientName.classList.toggle('orderClientName')
            clientName.innerText = clientsSaveds[index]
            orderContainer.appendChild(clientName)

            // create client order
            const clientOrder = document.createElement('p')
            clientOrder.classList.toggle('orderClientOrder')
            clientOrder.innerText = ordersSaveds[index]
            orderContainer.appendChild(clientOrder)
        }
    }   
}