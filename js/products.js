const createModal = () => {
    const body = document.querySelector('body')
    // create the popUp
    const modal = document.createElement('section')
    modal.classList.toggle('modal')
    modal.id = 'modalProducts'
    modal.setAttribute('tabindex', '998')
    body.appendChild(modal)

    const modalDialog = document.createElement('div')
    modalDialog.classList.toggle('modal-dialog')
    modal.appendChild(modalDialog)

    const modalContent = document.createElement('div')
    modalContent.classList.toggle('modal-content')
    modalContent.id = 'modalProductsContent'
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

    const editProductDiv = document.createElement('div')
    editProductDiv.id = 'editProductDiv'
    editProductDiv.classList.toggle('editProductDiv')
    editProductDiv.classList.toggle('hidden')
    modalBody.appendChild(editProductDiv)

    const showProductDiv = document.createElement('div')
    showProductDiv.id = 'showProductDiv'
    showProductDiv.classList.toggle('showProductDiv')
    modalBody.appendChild(showProductDiv)

}

const showProductsModal = () => {
    const productsModal = new bootstrap.Modal(document.getElementById('modalProducts'))
    
    const button = document.querySelector('#showProducts')

    button.addEventListener('click', () => {
        productsModal.show()

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
        const name = document.querySelector('#productNameInput').value.toLowerCase()
        const price = document.querySelector('#productPriceInput').value.toLowerCase()
        const type = document.querySelector('.newProductDiv input[type="radio"]:checked').value.toLowerCase()
        const flavors = document.querySelectorAll('.productFlavor')
        saveProduct(name, price, type, flavors)
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

    const inputNameAndPriceDiv = document.createElement('div')
    inputNameAndPriceDiv.id = 'inputNameAndPriceProductDiv'
    div.appendChild(inputNameAndPriceDiv)

    // product name
    const divName = document.createElement('div')
    divName.classList.toggle('productInput')
    inputNameAndPriceDiv.appendChild(divName)
    
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
    inputNameAndPriceDiv.appendChild(divPrice)
    
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

    const typeProductDiv = document.createElement('div')
    typeProductDiv.id = 'typeProductDiv'
    div.appendChild(typeProductDiv)

    // product type unit
    const divTypeUnit = document.createElement('div')
    divTypeUnit.classList.toggle('productInput')
    typeProductDiv.appendChild(divTypeUnit)
    
    const productUnitType = document.createElement('input')
    productUnitType.setAttribute('type', 'radio')
    productUnitType.setAttribute('name', 'productType')
    productUnitType.setAttribute('value', 'unit')
    productUnitType.setAttribute('checked', 'checked')
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
    typeProductDiv.appendChild(divTypeKilo)

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
        newProductFlavor(divFlavor)
    })

}

const newProductFlavor = (div, flavor) => {

    const newFlavorDiv = document.createElement('div')
    newFlavorDiv.classList.toggle('newFlavorOption')
    div.appendChild(newFlavorDiv)

    const newFlavorInput = document.createElement('input')
    newFlavorInput.classList.toggle('form-control')
    newFlavorInput.classList.toggle('productFlavor')
    newFlavorInput.placeholder = 'Adcione um novo sabor'
    newFlavorDiv.appendChild(newFlavorInput)
    
    if (flavor !== undefined) {
        newFlavorInput.value = flavor
    }

    const btnClose = document.createElement('button')
    btnClose.setAttribute('type', 'button')
    btnClose.classList.toggle('btn-close')
    btnClose.setAttribute('aria-label', 'Close')
    newFlavorDiv.appendChild(btnClose)

    btnClose.addEventListener('click', (botaoClicado) => {
        botaoClicado.target.parentNode.remove()
    })

}

const saveProduct = (name, price, type, flavors, id) => {

    let productFlavorList = []
    for (let index = 0; index < flavors.length; index += 1) {
        if (flavors[index].value !== '') {
            productFlavorList.push(flavors[index].value.toLowerCase())
        }
    }

    const productsStorage = JSON.parse(localStorage.getItem('products')) || []

    let productId;
    if (name !== '' && price !== '') {
        if (id === undefined) {
            // create product id
            if (productsStorage.length === 0) {
                productId = 0
            } else {
                productId = productsStorage.length
            }        
            const product = {
                name: name,
                price: price,
                type: type,
                flavors: productFlavorList,
                id: productId
            }
    
            name.value = ''
            price.value = ''
    
        
            productsStorage.push(product)
            localStorage.setItem('products', JSON.stringify(productsStorage))
        } else {
            const product = {
                name: name,
                price: price,
                type: type,
                flavors: productFlavorList,
                id: id
            }
    
            name.value = ''
            price.value = ''
    
        
            productsStorage[id] = product
            localStorage.setItem('products', JSON.stringify(productsStorage))
        } 
    } else {
        window.alert('[ERRO] Verifique se todos os campos estão preenchidos')
    }
}

const renderProductsSaveds = () => {
    const productsDiv = document.querySelector('#showProductDiv')

    while (productsDiv.firstChild) {
        productsDiv.removeChild(productsDiv.firstChild)
    }

    const productsSaveds = JSON.parse(localStorage.getItem('products'))
    
    if (productsSaveds !== null) {
        for (let index = 0; index < productsSaveds.length; index += 1) {
            const name = productsSaveds[index].name
            const price = productsSaveds[index].price
            let type = productsSaveds[index].type
            const flavors = productsSaveds[index].flavors
            const id = productsSaveds[index].id
    
            if (type === 'unit') {
                type = 'Uni'
            } else {
                type = 'Kg'
            }
    
            const productCard = document.createElement('div')
            productCard.classList.toggle('card')
            productCard.id = id
            productsDiv.appendChild(productCard)
    
            const cardHeader = document.createElement('div')
            cardHeader.classList.toggle('card-header')
            cardHeader.innerText = name
            productCard.appendChild(cardHeader)
            showEditProduct(generateSvgIcon(cardHeader))
    
            const listGroup = document.createElement('ul')
            listGroup.classList.toggle('list-group')
            listGroup.classList.toggle('list-group-flush')
            productCard.appendChild(listGroup)
    
            const liPrice = document.createElement('li')
            liPrice.classList.toggle('list-group-item')
            liPrice.innerText = `R$ ${parseFloat(price).toFixed(2)}/${type}`
            listGroup.appendChild(liPrice)
    
            
            if (flavors.length > 0) {
                const liFlavorHeader = document.createElement('li')
                liFlavorHeader.classList.toggle('list-group-item')
                liFlavorHeader.classList.toggle('list-group-flavor-header')
                liFlavorHeader.innerText = 'Sabores:'
                listGroup.appendChild(liFlavorHeader)   
            }
    
            for (let flavorsIndex = 0; flavorsIndex < flavors.length; flavorsIndex += 1) {
                const liFlavor = document.createElement('li')
                liFlavor.classList.toggle('list-group-item')
                liFlavor.classList.toggle('list-group-flavor')
                liFlavor.innerHTML = `&#8729 ${flavors[flavorsIndex]}`
                listGroup.appendChild(liFlavor)
            }
        }    
    }
}

const generateSvgIcon = (fatherElement) => {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    )
    const iconPath2 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      )
  
    iconSvg.setAttribute('width', '16')
    iconSvg.setAttribute('height', '16')
    iconSvg.setAttribute('fill', 'currentColor')
    iconSvg.classList.toggle('bi')
    iconSvg.classList.toggle('bi-pencil-square')
    iconSvg.classList.toggle('editProductButton')
    iconSvg.setAttribute('viewBox', '0 0 16 16')
  
    iconPath.setAttribute(
      'd',
      'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z'
    )
    iconPath2.setAttribute(
        'd',
        'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
    )
    iconPath2.setAttribute('fill-rule', 'evenodd')

    iconSvg.appendChild(iconPath)
    iconSvg.appendChild(iconPath2)
  
    return fatherElement.appendChild(iconSvg)
}

const editProductFlavor = (div, flavor) => {

    const newFlavorDiv = document.createElement('div')
    newFlavorDiv.classList.toggle('newFlavorOption')
    div.appendChild(newFlavorDiv)

    const newFlavorInput = document.createElement('input')
    newFlavorInput.classList.toggle('form-control')
    newFlavorInput.classList.toggle('editproductFlavor')
    newFlavorInput.placeholder = 'Adcione um novo sabor'
    newFlavorDiv.appendChild(newFlavorInput)
    
    if (flavor !== undefined) {
        newFlavorInput.value = flavor
    }

    const btnClose = document.createElement('button')
    btnClose.setAttribute('type', 'button')
    btnClose.classList.toggle('btn-close')
    btnClose.setAttribute('aria-label', 'Close')
    newFlavorDiv.appendChild(btnClose)

    btnClose.addEventListener('click', (botaoClicado) => {
        botaoClicado.target.parentNode.remove()
    })

}

const createEditProductOptions = (name, price, type, flavors) => {
    const editProductDiv = document.querySelector('#editProductDiv')

    const title = document.createElement('h5')
    title.innerText = 'Editar Produto'
    editProductDiv.appendChild(title)
    
    const inputNameAndPriceDiv = document.createElement('div')
    inputNameAndPriceDiv.id = 'inputNameAndPriceProductDiv'
    editProductDiv.appendChild(inputNameAndPriceDiv)

    // product name
    const divName = document.createElement('div')
    divName.classList.toggle('productInput')
    inputNameAndPriceDiv.appendChild(divName)
    
    const productNameLabel = document.createElement('label')
    productNameLabel.innerText = 'Nome'
    productNameLabel.setAttribute('for', 'editproductNameInput')
    productNameLabel.classList.toggle('form-label')
    divName.appendChild(productNameLabel)

    const productName = document.createElement('input')
    productName.setAttribute('type', 'text')
    productName.classList.toggle('form-control')
    productName.id = 'editproductNameInput'
    productName.value = name
    divName.appendChild(productName)

    // product price
    const divPrice = document.createElement('div')
    divPrice.classList.toggle('productInput')
    inputNameAndPriceDiv.appendChild(divPrice)
    
    const productPriceLabel = document.createElement('label')
    productPriceLabel.innerText = 'Preço'
    productPriceLabel.setAttribute('for', 'editproductPriceInput')
    productPriceLabel.classList.toggle('form-label')
    divPrice.appendChild(productPriceLabel)

    const productPrice = document.createElement('input')
    productPrice.setAttribute('type', 'number')
    productPrice.classList.toggle('form-control')
    productPrice.id = 'editproductPriceInput'
    productPrice.value = price
    divPrice.appendChild(productPrice)

    const typeProductDiv = document.createElement('div')
    typeProductDiv.id = 'typeProductDiv'
    editProductDiv.appendChild(typeProductDiv)

    // product type unit
    const divTypeUnit = document.createElement('div')
    divTypeUnit.classList.toggle('productInput')
    typeProductDiv.appendChild(divTypeUnit)
    
    const productUnitType = document.createElement('input')
    productUnitType.setAttribute('type', 'radio')
    productUnitType.setAttribute('name', 'productType')
    productUnitType.setAttribute('value', 'unit')
    productUnitType.classList.toggle('form-check-input')
    productUnitType.id = 'editproductTypeUnit'
    divTypeUnit.appendChild(productUnitType)

    const productUnitLabel = document.createElement('label')
    productUnitLabel.innerText = 'Unidade'
    productUnitLabel.setAttribute('for', 'editproductTypeUnit')
    productUnitLabel.classList.toggle('form-label')
    divTypeUnit.appendChild(productUnitLabel)

    if (type === 'unit') {
        productUnitType.setAttribute('checked', 'checked')
    }

    // product type kilo
    const divTypeKilo = document.createElement('div')
    divTypeKilo.classList.toggle('productInput')
    typeProductDiv.appendChild(divTypeKilo)

    const productKiloType = document.createElement('input')
    productKiloType.setAttribute('type', 'radio')
    productKiloType.setAttribute('name', 'productType')
    productKiloType.classList.toggle('form-check-input')
    productKiloType.setAttribute('value', 'kilo')
    productKiloType.id = 'editproductKiloType'
    divTypeKilo.appendChild(productKiloType)

    const productkiloLabel = document.createElement('label')
    productkiloLabel.innerText = 'Quilo'
    productkiloLabel.setAttribute('for', 'editproductKiloType')
    productkiloLabel.classList.toggle('form-label')
    divTypeKilo.appendChild(productkiloLabel)

    if (type === 'kilo') {
        productKiloType.setAttribute('checked', 'checked')
    }

    // flavors
    const addFlavor = document.createElement('button')
    addFlavor.innerText = 'Adcionar Sabor'
    addFlavor.setAttribute('type', 'button')
    addFlavor.id = 'newFlavor'
    addFlavor.classList.toggle('btn')
    addFlavor.classList.toggle('btn-secondary')
    editProductDiv.appendChild(addFlavor)

    const divFlavor = document.createElement('div')
    divFlavor.id = 'newFlavorDiv'
    divFlavor.classList.toggle('productInput')
    editProductDiv.appendChild(divFlavor)

    if (flavors.length > 0) {
        for (let index = 0; index < flavors.length; index += 1) {
            editProductFlavor(divFlavor, flavors[index])
        }
    }

    // add new flavor
    addFlavor.addEventListener('click', () => {
        editProductFlavor(divFlavor)
    })

    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.toString('editProductButtons')
    editProductDiv.appendChild(buttonsDiv)

    const saveButton = document.createElement('button')
    saveButton.id = 'saveEditProduct'
    saveButton.classList.toggle('saveEditProduct')
    saveButton.classList.toggle('btn')
    saveButton.classList.toggle('btn-success')
    saveButton.innerText = 'Salvar'
    editProductDiv.appendChild(saveButton)

    const cancelButton = document.createElement('button')
    cancelButton.id = 'cancelEditProduct'
    cancelButton.classList.toggle('cancelEditProduct')
    cancelButton.classList.toggle('btn')
    cancelButton.classList.toggle('btn-danger')
    cancelButton.innerText = 'Cancelar'
    editProductDiv.appendChild(cancelButton)
}

const showEditProduct = (buttonClicked) => {  

    buttonClicked.addEventListener('click', () => {

        const productsInLocal = JSON.parse(localStorage.getItem('products'))  

        const productId = buttonClicked.parentNode.parentNode.id
    
        const name = productsInLocal[productId].name
        const price = productsInLocal[productId].price
        const type = productsInLocal[productId].type
        const flavors = productsInLocal[productId].flavors
        
        const editProductDiv = document.querySelector('#editProductDiv')
        editProductDiv.classList.remove('hidden')

        const newProductButtonDiv = document.querySelector('.buttonsProducts')
        newProductButtonDiv.classList.add('hidden')
        
        const newProduct = document.querySelector('.newProductDiv')
        newProduct.classList.add('hidden')

        while (editProductDiv.firstChild) {
            editProductDiv.removeChild(editProductDiv.firstChild)
        }
        createEditProductOptions(name, price, type, flavors, productId)
        buttonsEditProduct(productId)

    })

}

const buttonsEditProduct = (id) => {
    const saveButton = document.querySelector('#saveEditProduct')
    const cancelButton = document.querySelector('#cancelEditProduct')
    const editProductDiv = document.querySelector('#editProductDiv')

    saveButton.addEventListener('click', () => {
        const name = document.querySelector('#editproductNameInput').value.toLowerCase()
        const price = document.querySelector('#editproductPriceInput').value.toLowerCase()
        const type = document.querySelector('.editProductDiv input[type="radio"]:checked').value.toLowerCase()
        const flavors = document.querySelectorAll('.editproductFlavor')
        
        saveProduct(name, price, type, flavors, id)
        renderProductsSaveds()
    })

    cancelButton.addEventListener('click', () => {
        while (editProductDiv.firstChild) {
            editProductDiv.removeChild(editProductDiv.firstChild)
        }
        editProductDiv.classList.toggle('hidden')
        
        const newProductButtonDiv = document.querySelector('.buttonsProducts')
        newProductButtonDiv.classList.remove('hidden')
    })
}