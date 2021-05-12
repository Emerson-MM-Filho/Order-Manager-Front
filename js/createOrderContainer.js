const createOrderContainer = (client, order) => {
    const orderList = document.querySelector('.orderList')

    // create container
    const orderContainer = document.createElement('div')
    orderContainer.classList.toggle('orderContainer')
    orderContainer.id = client
    orderList.appendChild(orderContainer)


    // create client name
    const clientName = document.createElement('h3')
    clientName.classList.toggle('orderClientName')
    clientName.innerText = client
    orderContainer.appendChild(clientName)

    // create client order
    const clientOrder = document.createElement('p')
    clientOrder.classList.toggle('orderClientOrder')
    clientOrder.innerText = order
    orderContainer.appendChild(clientOrder)

    // create close button
    const closeButton = document.createElement('button')
    closeButton.id = `${client}CloseButton`
    closeButton.classList.toggle('closeOrderButton')
    closeButton.innerText = 'Deletar'
    orderContainer.appendChild(closeButton)
    deleteOrder(closeButton)
}