const addOrder = () => {
    const clientNameInput = document.querySelector('#clientName')
    const clientOrderInput = document.querySelector('#clientOrder')
    const addOrderButton = document.querySelector('#addClientOrder')

    addOrderButton.addEventListener('click', () => {
        if (clientOrderInput.value !== '' && clientNameInput.value !== '') {

            createOrderContainer(clientOrderInput.value, clientNameInput.value)

            clientOrderInput.value = ''
            clientNameInput.value = ''
            
        } else {
            window.alert('Verifique o pedido e tente novamente!')
        }   
        saveOrders()
    })
}