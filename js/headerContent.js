const headerContent = () => {
    const header = document.querySelector('.mainHeader')

    const products = document.createElement('button')
    products.classList.toggle('headerButton')
    products.id = 'showProducts'
    products.innerText = 'Produtos'
    header.appendChild(products)
}