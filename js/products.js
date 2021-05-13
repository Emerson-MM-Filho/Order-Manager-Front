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

    const showProductDiv = document.createElement('div')
    showProductDiv.id = 'showProductDiv'
    showProductDiv.classList.toggle('showProductDiv')
    modalBody.appendChild(showProductDiv)

}

const showProductsPopUp = () => {
    const myModal = new bootstrap.Modal(document.getElementById('modalProducts'))
    
    const button = document.querySelector('#showProducts')

    button.addEventListener('click', () => {
        myModal.show()

        const modal = document.querySelector('.modal')
        if (modal.classList.contains('show')) {
            document.querySelector('#newProductDiv').classList.add('hidden')
            document.querySelector('#createProduct').classList.add('hidden')
            document.querySelector('#newProductButton').innerText = 'Adicionar'
            const flavorDiv = document.querySelector('#newFlavorDiv')
            while (flavorDiv.firstChild) {
                flavorDiv.removeChild(flavorDiv.firstChild)
            }
            document.querySelector('#productNameInput').value = ''
            document.querySelector('#productPriceInput').value = ''
        }

        renderProductsSaveds()
    })
}

const showNewProductButton = () => {
    const popUpBody = document.querySelector('.modal-body')

    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.toggle('buttonsProducts')
    popUpBody.appendChild(buttonsDiv)

    const saveProductButton = document.createElement('button')
    saveProductButton.id = 'createProduct'
    saveProductButton.innerText = 'Criar Produto'
    saveProductButton.classList.toggle('btn')
    saveProductButton.classList.toggle('btn-success')
    saveProductButton.classList.toggle('hidden')
    saveProductButton.setAttribute('type', 'button')
    buttonsDiv.appendChild(saveProductButton)

    saveProductButton.addEventListener('click', () => {
        saveNewProduct()
        renderProductsSaveds()

        const flavorDiv = document.querySelector('#newFlavorDiv')
        while (flavorDiv.firstChild) {
            flavorDiv.removeChild(flavorDiv.firstChild)
        }
        document.querySelector('#productNameInput').value = ''
        document.querySelector('#productPriceInput').value = ''

    })

    const newProductButton = document.createElement('button')
    newProductButton.innerText = 'Adcionar'
    newProductButton.id = 'newProductButton'
    newProductButton.classList.toggle('btn')
    newProductButton.classList.toggle('btn-primary')
    newProductButton.setAttribute('type', 'button')
    buttonsDiv.appendChild(newProductButton)
    
    const divNewProduct = document.querySelector('#newProductDiv')

    newProductButton.addEventListener('click', () => {
        divNewProduct.classList.toggle('hidden')
        saveProductButton.classList.toggle('hidden')
        if (divNewProduct.classList.contains('hidden')) {
            newProductButton.innerText = 'Adicionar'
            document.querySelector('#productNameInput').value = ''
            document.querySelector('#productPriceInput').value = ''

            const flavorDiv = document.querySelector('#newFlavorDiv')
            while (flavorDiv.firstChild) {
                flavorDiv.removeChild(flavorDiv.firstChild)
            }
        } else {
            newProductButton.innerText = 'Concluir'
        }
    })
}

const newProductsOption = () => {
    const div = document.querySelector('.newProductDiv')

    // product name
    const divName = document.createElement('div')
    divName.classList.toggle('productInput')
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
    divPrice.classList.toggle('productInput')
    div.appendChild(divPrice)
    
    const productPriceLabel = document.createElement('label')
    productPriceLabel.innerText = 'Preço'
    productPriceLabel.setAttribute('for', 'productPriceInput')
    productPriceLabel.classList.toggle('form-label')
    divPrice.appendChild(productPriceLabel)

    const productPrice = document.createElement('input')
    productPrice.setAttribute('type', 'number')
    productPrice.classList.toggle('form-control')
    productPrice.id = 'productPriceInput'
    productPrice.placeholder = 'Preço'
    divPrice.appendChild(productPrice)

    // product type unit
    const divTypeUnit = document.createElement('div')
    divTypeUnit.classList.toggle('productInput')
    div.appendChild(divTypeUnit)
    
    const productUnitType = document.createElement('input')
    productUnitType.setAttribute('type', 'radio')
    productUnitType.setAttribute('name', 'productType')
    productUnitType.setAttribute('value', 'unit')
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
    divTypeKilo.classList.toggle('productInput')
    div.appendChild(divTypeKilo)

    const productKiloType = document.createElement('input')
    productKiloType.setAttribute('type', 'radio')
    productKiloType.setAttribute('name', 'productType')
    productKiloType.classList.toggle('form-check-input')
    productKiloType.setAttribute('value', 'kilo')
    productKiloType.id = 'productKiloType'
    divTypeKilo.appendChild(productKiloType)

    const productkiloLabel = document.createElement('label')
    productkiloLabel.innerText = 'Quilo'
    productkiloLabel.setAttribute('for', 'productKiloType')
    productkiloLabel.classList.toggle('form-label')
    divTypeKilo.appendChild(productkiloLabel)

    // flavors
    const addFlavor = document.createElement('button')
    addFlavor.innerText = 'Adcionar Sabor'
    addFlavor.setAttribute('type', 'button')
    addFlavor.id = 'newFlavor'
    addFlavor.classList.toggle('btn')
    addFlavor.classList.toggle('btn-secondary')
    div.appendChild(addFlavor)

    const divFlavor = document.createElement('div')
    divFlavor.id = 'newFlavorDiv'
    divFlavor.classList.toggle('productInput')
    div.appendChild(divFlavor)


    // add new flavor
    addFlavor.addEventListener('click', () => {
        newProductFlavor()
    })

}

const newProductFlavor = () => {
    const div = document.querySelector('#newFlavorDiv')

    const newFlavorDiv = document.createElement('div')
    newFlavorDiv.classList.toggle('newFlavorOption')
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

const saveNewProduct = () => {

    const productName = document.querySelector('#productNameInput').value.toLowerCase()
    const productPrice = document.querySelector('#productPriceInput').value.toLowerCase()
    const productType = document.querySelector('.newProductDiv input[type="radio"]:checked').value.toLowerCase()
    const productFlavor = document.querySelectorAll('.productFlavor')
    
    let productFlavorList = []
    for (let index = 0; index < productFlavor.length; index += 1) {
        if (productFlavor[index].value !== '') {
            productFlavorList.push(productFlavor[index].value.toLowerCase())
        }
    }

    // create product id
    let productId = ''
    if (productType === 'unit') {
        productId += `U_${productName}`
    } else {
        productId += `K_${productName}`
    }

    if (productName !== '' && productPrice !== '') {
        
        const product = {
            name: productName,
            price: productPrice,
            type: productType,
            flavors: productFlavorList,
            id: productId
        }

        productName.value = ''
        productPrice.value = ''

        const productsStorage = JSON.parse(localStorage.getItem('products')) || [];
        productsStorage.push(product)
        localStorage.setItem('products', JSON.stringify(productsStorage))

    } else {
        window.alert('[ERRO] Verifique se todos os campos estão preenchidos')
    }

}

const renderProductsSaveds = () => {
    const productsSaveds = JSON.parse(localStorage.getItem('products'))
    
    for (let index = 0; index < productsSaveds.length; index += 1) {
        const name = productsSaveds[index].name
        const price = productsSaveds[index].price
        let type = productsSaveds[index].type
        const flavors = productsSaveds[index].flavors
        const id = productsSaveds[index].id

        if (type === 'unit') {
            type = 'Unidade'
        } else {
            type = 'Quilo'
        }
        
        const productsDiv = document.querySelector('#showProductDiv')

        const productCard = document.createElement('div')
        productCard.classList.toggle('card')
        productCard.id = id
        productsDiv.appendChild(productCard)

        const cardHeader = document.createElement('div')
        cardHeader.classList.toggle('card-header')
        cardHeader.innerText = name
        productCard.appendChild(cardHeader)

        const listGroup = document.createElement('ul')
        listGroup.classList.toggle('list-group')
        listGroup.classList.toggle('list-group-flush')
        productCard.appendChild(listGroup)

        const liPrice = document.createElement('li')
        liPrice.classList.toggle('list-group-item')
        liPrice.innerText = `Preço: ${price}`
        listGroup.appendChild(liPrice)

        const liType = document.createElement('li')
        liType.classList.toggle('list-group-item')
        liType.innerText = `Tipo: ${type}`
        listGroup.appendChild(liType) 
        
        if (flavors.length > 0) {
            const liFlavorHeader = document.createElement('li')
            liFlavorHeader.classList.toggle('list-group-item')
            liFlavorHeader.classList.toggle('list-group-flavor')
            liFlavorHeader.innerText = 'Sabores'
            listGroup.appendChild(liFlavorHeader)   
        }

        for (let flavorsIndex = 0; flavorsIndex < flavors.length; flavorsIndex += 1) {
            const liFlavor = document.createElement('li')
            liFlavor.classList.toggle('list-group-item')
            liFlavor.classList.toggle('list-group-flavor')
            liFlavor.innerText = flavors[flavorsIndex]
            listGroup.appendChild(liFlavor)
        }
    }

    
}


