const renderOrdersSaveds = () => {
    const ordersSavedsInLocal = JSON.parse(localStorage.getItem('orders'))
    
    if (ordersSavedsInLocal !== null) {
        for (let index = 0; index < ordersSavedsInLocal.length; index += 1) {
            createOrderContainer(ordersSavedsInLocal[index].client, ordersSavedsInLocal[index].orders)
        }
    }   
}