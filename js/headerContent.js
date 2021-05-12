const headerContent = () => {
    const header = document.querySelector('.mainHeader')

    // create app page
    const tittle = document.createElement('h1')
    tittle.classList.toggle('tittle')
    tittle.innerText = 'Pedidos do dia'
    header.appendChild(tittle)

    // create products button
    const products = document.createElement('button')
    products.classList.toggle('headerButton')
    products.id = 'showProducts'
    products.innerText = 'Produtos'
    header.appendChild(products)
}