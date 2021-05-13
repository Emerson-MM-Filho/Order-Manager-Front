const createPopUp = () => {
    const body = document.querySelector('body')
    // create the popUp
    const modal = document.createElement('section')
    modal.classList.toggle('modal')
    modal.id = 'modalProducts'
    modal.setAttribute('tabindex', '-1')
    body.appendChild(modal)

    const modalDialog = document.createElement('div')
    modalDialog.classList.toggle('modal-dialog')
    modal.appendChild(modalDialog)

    const modalContent = document.createElement('div')
    modalContent.classList.toggle('modal-content')
    modalDialog.appendChild(modalContent)

    const modalHeader = document.createElement('div')
    modalHeader.classList.toggle('modal-header')
    modalContent.appendChild(modalHeader)

    const modalTitle = document.createElement('h5')
    modalTitle.classList.toggle('modal-title')
    modalTitle.innerText = 'Produtos'
    modalHeader.appendChild(modalTitle)

    const btnClose = document.createElement('button')
    btnClose.setAttribute('type', 'button')
    btnClose.classList.toggle('btn-close')
    btnClose.setAttribute('data-bs-dismiss', 'modal')
    btnClose.setAttribute('aria-label', 'Close')
    modalHeader.appendChild(btnClose)

    const modalBody = document.createElement('div')
    modalBody.classList.toggle('modal-body')
    modalContent.appendChild(modalBody)

    const newProductDiv = document.createElement('div')
    newProductDiv.id = 'newProductDiv'
    newProductDiv.classList.toggle('newProductDiv')
    newProductDiv.classList.toggle('hidden')
    modalBody.appendChild(newProductDiv)

    showNewProductButton()
}


const showProductsPopUp = () => {
    const myModal = new bootstrap.Modal(document.getElementById('modalProducts'))
    
    const button = document.querySelector('#showProducts')

    button.addEventListener('click', () => {
        myModal.show()
    })
}

const showNewProductButton = () => {
    const popUpBody = document.querySelector('.modal-body')

    const newProductButton = document.createElement('button')
    newProductButton.innerText = 'Adcionar'
    newProductButton.classList.toggle('btn')
    newProductButton.classList.toggle('btn-primary')
    newProductButton.setAttribute('type', 'button')
    
    popUpBody.appendChild(newProductButton)

    const divNewProduct = document.querySelector('#newProductDiv')


    newProductButton.addEventListener('click', () => {
        divNewProduct.classList.toggle('hidden')
        if (newProductButton.innerText === 'Adcionar') {
            newProductButton.innerText = 'Concluir'
        } else {
            newProductButton.innerText = 'Adcionar'
        }
    })
    
}

const newProductsOption = () => {
    const div = document.querySelector('.newProductDiv')

    // product name
    const divName = document.createElement('div')
    divName.classList.toggle('mb-3')
    div.appendChild(divName)
    
    const productNameLabel = document.createElement('label')
    productNameLabel.innerText = 'Nome'
    productNameLabel.setAttribute('for', 'productNameInput')
    productNameLabel.classList.toggle('form-label')
    divName.appendChild(productNameLabel)

    const productName = document.createElement('input')
    productName.setAttribute('type', 'text')
    productName.classList.toggle('form-control')
    productName.id = 'productNameInput'
    productName.placeholder = 'Nome do Produto'
    divName.appendChild(productName)

    // product price
    const divPrice = document.createElement('div')
    divPrice.classList.toggle('mb-3')
    div.appendChild(divPrice)
    
    const productPriceLabel = document.createElement('label')
    productPriceLabel.innerText = 'Preço'
    productPriceLabel.setAttribute('for', 'productPriceInput')
    productPriceLabel.classList.toggle('form-label')
    divPrice.appendChild(productPriceLabel)

    const productPrice = document.createElement('input')
    productPrice.setAttribute('type', 'text')
    productPrice.classList.toggle('form-control')
    productPrice.id = 'productPriceInput'
    productPrice.placeholder = 'Preço'
    divPrice.appendChild(productPrice)

    // product type unit
    const divTypeUnit = document.createElement('div')
    divTypeUnit.classList.toggle('mb-3')
    div.appendChild(divTypeUnit)
    
    const productUnitType = document.createElement('input')
    productUnitType.setAttribute('type', 'radio')
    productUnitType.setAttribute('name', 'productType')
    productUnitType.classList.toggle('form-check-input')
    productUnitType.id = 'productTypeUnit'
    divTypeUnit.appendChild(productUnitType)

    const productUnitLabel = document.createElement('label')
    productUnitLabel.innerText = 'Unidade'
    productUnitLabel.setAttribute('for', 'productTypeUnit')
    productUnitType.setAttribute('checked', 'checked')
    productUnitLabel.classList.toggle('form-label')
    divTypeUnit.appendChild(productUnitLabel)

    // product type kilo
    const divTypeKilo = document.createElement('div')
    divTypeKilo.classList.toggle('mb-3')
    div.appendChild(divTypeKilo)

    const productKiloType = document.createElement('input')
    productKiloType.setAttribute('type', 'radio')
    productKiloType.setAttribute('name', 'productType')
    productKiloType.classList.toggle('form-check-input')
    productKiloType.id = 'productKiloType'
    divTypeKilo.appendChild(productKiloType)

    const productkiloLabel = document.createElement('label')
    productkiloLabel.innerText = 'Quilo'
    productkiloLabel.setAttribute('for', 'productKiloType')
    productkiloLabel.classList.toggle('form-label')
    divTypeKilo.appendChild(productkiloLabel)

    // flavors
    const divFlavor = document.createElement('div')
    divFlavor.classList.toggle('mb-3')
    div.appendChild(divFlavor)

    const addFlavor = document.createElement('button')
    addFlavor.innerText = 'Adcionar Sabor'
    addFlavor.setAttribute('type', 'button')
    addFlavor.id = 'newFlavor'
    addFlavor.classList.toggle('btn')
    addFlavor.classList.toggle('btn-secondary')
    divFlavor.appendChild(addFlavor)

    // add new flavor
    addFlavor.addEventListener('click', () => {
        newProductFlavor()
    })

}

const newProductFlavor = () => {
    const div = document.querySelector('#newProductDiv')

    const newFlavorDiv = document.createElement('div')
    newFlavorDiv.classList.toggle('newFlavorDiv')
    div.appendChild(newFlavorDiv)

    const newFlavorInput = document.createElement('input')
    newFlavorInput.classList.toggle('form-control')
    newFlavorInput.classList.toggle('productFlavor')
    newFlavorInput.placeholder = 'Adcione um novo sabor'
    newFlavorDiv.appendChild(newFlavorInput)

    const btnClose = document.createElement('button')
    btnClose.setAttribute('type', 'button')
    btnClose.classList.toggle('btn-close')
    btnClose.setAttribute('aria-label', 'Close')
    newFlavorDiv.appendChild(btnClose)

    btnClose.addEventListener('click', (botaoClicado) => {
        botaoClicado.target.parentNode.remove()
    })

}

const newProduct = () => {
    // const showNewProductsOptions = document.querySelector('#showNewProductsOptions')
    // const productNameInput = document.querySelector('#newProductNameInput')
    // const productValueInput = document.querySelector('#newProductValueInput')
    // const addNewProduct = document.querySelector('#addNewProduct')
    // const savedsProductsList = document.querySelector('#savedsProducts')
    
    // showNewProductsOptions.addEventListener('click', () => {
    //     productNameInput.classList.toggle('hidden')
    //     productValueInput.classList.toggle('hidden')
    //     addNewProduct.classList.toggle('hidden')
    // })

    // addNewProduct.addEventListener('click', () => {
    //     const productContainer = document.createElement('div')
    //     productContainer.classList.toggle('savedProduct')
    //     savedsProductsList.appendChild(productContainer)
        
    //     const savedProductName = document.createElement('h3')
    //     savedProductName.classList.toggle('savedProductName')
    //     savedProductName.innerText = productNameInput.value
    //     productContainer.appendChild(savedProductName)

    //     const savedProductValue = document.createElement('p')
    //     savedProductValue.classList.toggle('savedProductValue')
    //     savedProductValue.innerText = productValueInput.value
    //     productContainer.appendChild(savedProductValue)
        
    //     saveProducts(productNameInput.value, productValueInput.value)

    //     productNameInput.value = ''
    //     productValueInput.value = ''
    // })

}

const local = JSON.parse(localStorage.getItem('products')) || [];

const saveProducts = (name, price) => {

    // local.push({name: name, price: price})
    // localStorage.setItem('products', JSON.stringify(local))

}

const renderProductsSaveds = () => {
    // const productsInLocalStorage = JSON.parse(localStorage.getItem('products'))
    // const savedsProductsList = document.querySelector('#savedsProducts')

    // if (productsInLocalStorage !== null) {
    //     for (let index = 0; index < productsInLocalStorage.length; index += 1) {
    //         const productContainer = document.createElement('div')
    //         productContainer.classList.toggle('savedProduct')
    //         savedsProductsList.appendChild(productContainer)
            
    //         const savedProductName = document.createElement('h3')
    //         savedProductName.classList.toggle('savedProductName')
    //         savedProductName.innerText = productsInLocalStorage[index].name
    //         productContainer.appendChild(savedProductName)
    
    //         const savedProductValue = document.createElement('p')
    //         savedProductValue.classList.toggle('savedProductValue')
    //         savedProductValue.innerText = productsInLocalStorage[index].price
    //         productContainer.appendChild(savedProductValue)
    //     }
    // }
}