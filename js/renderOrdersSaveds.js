const renderOrdersSaveds = () => {
    const clientsSavedsInLocal = localStorage.getItem('clients')
    const ordersSavedsInLocal = localStorage.getItem('orders')

    
    if (clientsSavedsInLocal !== null && ordersSavedsInLocal !== null) {
        const clientsSaveds = clientsSavedsInLocal.split(',')
        const ordersSaveds = ordersSavedsInLocal.split(',')

        for (let index = 0; index < clientsSaveds.length; index += 1) {
            createOrderContainer(clientsSaveds[index], ordersSaveds[index])
        }
    }   
}