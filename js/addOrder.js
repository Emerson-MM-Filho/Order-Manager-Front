const addOrder = () => {
    const clientNameInput = document.querySelector('#clientName')
    const clientOrderInput = document.querySelector('#clientOrder')
    const addOrderButton = document.querySelector('#addClientOrder')
    const orderList = document.querySelector('.orderList')

    addOrderButton.addEventListener('click', () => {
        if (clientOrder.value !== '' && clientName.value !== '') {

            // create container
            const orderContainer = document.createElement('div')
            orderContainer.classList.toggle('orderContainer')
            orderList.appendChild(orderContainer)
            
    
            // create client name
            const clientName = document.createElement('h3')
            clientName.classList.toggle('orderClientName')
            clientName.innerText = clientNameInput.value
            orderContainer.appendChild(clientName)
    
            // create client order
            const clientOrder = document.createElement('p')
            clientOrder.classList.toggle('orderClientOrder')
            clientOrder.innerText = clientOrderInput.value
            orderContainer.appendChild(clientOrder)

            clientOrderInput.value = ''
            clientNameInput.value = ''
            
        } else {
            window.alert('Verifique o pedido e tente novamente!')
        }   
        saveOrders()
    })
}