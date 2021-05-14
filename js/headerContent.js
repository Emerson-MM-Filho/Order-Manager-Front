const headerContent = () => {
    const header = document.querySelector('.mainHeader')

    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const nowDate = new Date
    
    // create title page
    const title = document.createElement('h3')
    title.classList.toggle('tittle')
    title.innerText = 'Pedidos do dia'
    header.appendChild(title)

    // create date
    const date = document.createElement('h1')
    date.innerText = `${nowDate.getUTCDate()} de ${month[nowDate.getUTCMonth()]} de ${nowDate.getUTCFullYear()}`
    header.appendChild(date)
    
    // create products button
    const products = document.createElement('button')
    products.classList.toggle('headerButton')
    products.id = 'showProducts'
    products.innerText = 'Produtos'
    header.appendChild(products)
}