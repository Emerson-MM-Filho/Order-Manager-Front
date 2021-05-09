const deleteOrder = (closeButton) => {
    
    closeButton.addEventListener('click', () => {
        closeButton.parentElement.remove()
        saveOrders()
        if (localStorage.getItem('clients') === '' && localStorage.getItem('orders') === '') {
            localStorage.removeItem('clients')
            localStorage.removeItem('orders')
        }
    })
}