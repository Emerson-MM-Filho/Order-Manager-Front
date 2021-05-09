const createPopUp = () => {
    const body = document.querySelector('body')
    // create the popUp
    const popUp = document.createElement('section')
    popUp.classList.toggle('productsPopUp')
    popUp.classList.toggle('hidden')
    body.appendChild(popUp)

    const productName = document.createElement('input')
    productName.id = 'newProductNameInput'
    productName.classList.toggle('newProductInput')
    productName.classList.toggle('hidden')
    productName.placeholder = 'Produto'
    popUp.appendChild(productName)

    const productValue = document.createElement('input')
    productValue.id = 'newProductValueInput'
    productValue.classList.toggle('newProductInput')
    productValue.classList.toggle('hidden')
    productValue.placeholder = 'Valor'
    popUp.appendChild(productValue)

    const addProduct = document.createElement('button')
    addProduct.id = ('addNewProduct')
    addProduct.classList.toggle('popUpButton')
    addProduct.classList.toggle('hidden')
    addProduct.innerText = 'Adicionar'
    popUp.appendChild(addProduct)

    const newProductButton = document.createElement('button')
    newProductButton.id = 'showNewProductsOptions'
    newProductButton.classList.toggle('popUpButton')
    newProductButton.innerText = 'Novo Produto'
    popUp.appendChild(newProductButton)

    const allProductsTittle = document.createElement('h2')
    allProductsTittle.innerText = 'Produtos Cadastrados'
    popUp.appendChild(allProductsTittle)

    const productsDiv = document.createElement('div')
    productsDiv.id = 'savedsProducts'
    popUp.appendChild(productsDiv)
}


const showProductsPopUp = () => {
    const productsButton = document.querySelector('#showProducts')

    productsButton.addEventListener('click', () => {
    
        const productsPopUp = document.querySelector('.productsPopUp')
        productsPopUp.classList.toggle('hidden')
        newProduct()
    })
}

const newProduct = () => {
    const showNewProductsOptions = document.querySelector('#showNewProductsOptions')
    const productNameInput = document.querySelector('#newProductNameInput')
    const productValueInput = document.querySelector('#newProductValueInput')
    const addNewProduct = document.querySelector('#addNewProduct')
    const savedsProductsList = document.querySelector('#savedsProducts')
    
    showNewProductsOptions.addEventListener('click', () => {
        productNameInput.classList.toggle('hidden')
        productValueInput.classList.toggle('hidden')
        addNewProduct.classList.toggle('hidden')
    })

    addNewProduct.addEventListener('click', () => {
        const productContainer = document.createElement('div')
        productContainer.classList.toggle('savedProduct')
        savedsProductsList.appendChild(productContainer)
        
        const savedProductName = document.createElement('h3')
        savedProductName.classList.toggle('savedProductName')
        savedProductName.innerText = productNameInput.value
        productContainer.appendChild(savedProductName)

        const savedProductValue = document.createElement('p')
        savedProductValue.classList.toggle('savedProductValue')
        savedProductValue.innerText = productValueInput.value
        productContainer.appendChild(savedProductValue)
        
        productNameInput.value = ''
        productValueInput.value = ''
    })

}