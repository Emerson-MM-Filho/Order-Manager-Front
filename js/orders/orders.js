const createInputOrderOptions = () => {

    // create the section
    const main = document.querySelector('main')
    const section = newSection(main, ['inputOrderSection'])

    // create name input
    newInput(section, ['inputOrder'], 'clientName', [['type', 'text']], 'Nome')

    // create order input
    newInput(section, ['inputOrder'], 'clientOrder', [['type', 'text']], 'Pedido')

    // create add order button
    newButton(section, ['addOrderButton'], 'addClientOrder', 'Adcionar')
}

const addOrder = () => {
    const clientNameInput = document.querySelector('#clientName')
    const clientOrderInput = document.querySelector('#clientOrder')
    const addOrderButton = document.querySelector('#addClientOrder')

    addOrderButton.addEventListener('click', () => {
        if (clientOrderInput.value !== '' && clientNameInput.value !== '') {

            createOrderContainer(clientNameInput.value, clientOrderInput.value)

            saveOrders(clientNameInput.value, clientOrderInput.value)

            clientOrderInput.value = ''
            clientNameInput.value = ''
            
        } else {
            window.alert('Verifique o pedido e tente novamente!')
        }   
    })
}

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

const deleteAll = () => {
    const fullOrderList = document.querySelector('.orderList')
  
    while (fullOrderList.firstChild) {
      fullOrderList.removeChild(fullOrderList.firstChild);
    }
}

const deleteOrder = (closeButton) => {
    
    closeButton.addEventListener('click', () => {

        const ordersSavedsInLocal = JSON.parse(localStorage.getItem('orders'))
        const container = closeButton.parentElement.id
        const clientName = document.querySelector(`#${container} h3`)
        const clientOrder = document.querySelector(`#${container} p`)
        
        const findElement = {client: clientName.innerText, orders: clientOrder.innerText}

        const indexClickedOrder = ordersSavedsInLocal.findIndex((obj) => {
            return JSON.stringify(obj) === JSON.stringify(findElement)
        })

        ordersSavedsInLocal.splice(indexClickedOrder, 1)

        localStorage.setItem('orders', JSON.stringify(ordersSavedsInLocal))
        
        deleteAll()
        renderOrdersSaveds()
    })
}

const orderList = () => {

    // create the section
    const main = document.querySelector('main')
    const section = document.createElement('section')
    section.classList.toggle('orderListSection')
    main.appendChild(section)

    // create list
    const div = document.createElement('div')
    div.classList.toggle('orderList')
    section.appendChild(div)
}

const renderOrdersSaveds = () => {
    const ordersSavedsInLocal = JSON.parse(localStorage.getItem('orders'))
    
    if (ordersSavedsInLocal !== null) {
        for (let index = 0; index < ordersSavedsInLocal.length; index += 1) {
            createOrderContainer(ordersSavedsInLocal[index].client, ordersSavedsInLocal[index].orders)
        }
    }   
}

const orders = JSON.parse(localStorage.getItem('orders')) || []

const saveOrders = (clientName, clientOrder) => {
    orders.push({client: clientName, orders: clientOrder})
    localStorage.setItem('orders', JSON.stringify(orders))
}