const deleteOrder = (closeButton) => {
    
    closeButton.addEventListener('click', () => {
        // closeButton.parentElement.remove()
        // saveOrders()
        // if (localStorage.getItem('clients') === '' && localStorage.getItem('orders') === '') {
        //     localStorage.removeItem('clients')
        //     localStorage.removeItem('orders')
        // }


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