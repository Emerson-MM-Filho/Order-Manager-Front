const createModal = () => {
    const body = document.querySelector('body')

    const modal = newSection(body, ['modal'], 'modalProducts')
    modal.setAttribute('tabindex', '-1')

    const modalDialog = newDiv(modal, ['modal-dialog', 'modal-dialog-centered'])

    const modalContent = newDiv(modalDialog, ['modal-content'], 'modalProductsContent')

    const modalHeader = newDiv(modalContent, ['modal-header'])

    const btnClose = newButton(modalHeader, ['btn-close'])
    btnClose.setAttribute('data-bs-dismiss', 'modal')
    btnClose.setAttribute('aria-label', 'Close')

    const modalBody = newDiv(modalContent, ['modal-body'])
    newDiv(modalBody, ['newProductDiv', 'hidden'], 'newProductDiv')
    newDiv(modalBody, ['editProductDiv', 'hidden'], 'editProductDiv')
    newDiv(modalBody, ['showProductDiv'], 'showProductDiv')

}

const showProductsModal = () => {
    const productsModal = new bootstrap.Modal(document.getElementById('modalProducts'))
    
    const button = document.querySelector('#showProducts')

    button.addEventListener('click', () => {
        productsModal.show()

        const modal = document.querySelector('.modal')
        if (modal.classList.contains('show')) {

            document.querySelector('#newProductDiv').classList.add('hidden')
            document.querySelector('#editProductDiv').classList.add('hidden')

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

const newProductsOption = () => {
    const div = document.querySelector('.newProductDiv')

    newH(div, 'h5', 'Novo Produto')

    const inputNameAndPriceDiv = newDiv(div, [''], 'inputNameAndPriceProductDiv')


    // product name
    const divName = newDiv(inputNameAndPriceDiv, ['productInput'])
    newLabel(divName, ['form-label'], 'productNameInput', 'Nome')
    const productName = newInput(divName, ['form-control'], 'productNameInput', [['type', 'text']], 'Nome do Produto')


    // product price
    const divPrice = newDiv(inputNameAndPriceDiv, ['productInput'])
    newLabel(divPrice, ['form-label'], 'productPriceInput', 'Preço')
    const productPrice = newInput(divPrice, ['form-control'], 'productPriceInput', [['type','number']], 'Preço')


    // product type div
    const typeProductDiv = newDiv(div, [''], 'typeProductDiv')


    // product type unit
    const divTypeUnit = newDiv(typeProductDiv, ['productInput'])
    newInput(divTypeUnit, ['form-check-input'], 'productTypeUnit', [['type', 'radio'],['name', 'productType'], ['value', 'unit']])
    newLabel(divTypeUnit, ['form-label'], 'productTypeUnit', 'Unidade')


    // product type kilo
    const divTypeKilo = newDiv(typeProductDiv, ['productInput'])
    newInput(divTypeKilo, ['form-check-input'], 'productKiloType', [['type', 'radio'],['name', 'productType'], ['value', 'kilo']])
    newLabel(divTypeKilo, ['form-label'], 'productKiloType', 'Quilo')


    // flavors
    const addFlavor = newButton(div, ['btn', 'btn-secondary'], 'newFlavor', 'Adicionar Sabor')
    const divFlavor = newDiv(div, ['productInput'], 'newFlavorDiv')


    // add new flavor
    addFlavor.addEventListener('click', () => {
        newProductFlavor(divFlavor)
    })


    // buttons
    const buttonsDiv = newDiv(div, ['buttonsProducts'])


    // save product button
    const saveProductButton = newButton(buttonsDiv, ['btn', 'btn-success'], 'createProduct', 'Criar Produto')


    // click on 'Criar Produto'
    saveProductButton.addEventListener('click', () => {

        const name = productName.value.toLowerCase()
        const price = productPrice.value.toLowerCase()
        const type = document.querySelector('.newProductDiv input[type="radio"]:checked')
        const flavors = document.querySelectorAll('.productFlavor')

        if (name !== '' && price !== '' && type !== null) {

            saveProduct(name, price, type.value.toLowerCase(), flavors)
            renderProductsSaveds()
    
            productName.value = ''
            productPrice.value = ''
    
            divNewProduct.classList.add('hidden')
    
            if (divNewProduct.classList.contains('hidden')) {
                productName.value = ''
                productPrice.value = ''
    
                const flavorDiv = document.querySelector('#newFlavorDiv')
                while (flavorDiv.firstChild) {
                    flavorDiv.removeChild(flavorDiv.firstChild)
                }
            }
        } else {
            window.alert('[ERRO] Preencha todos os campos')
        }

    })


    // cancel new product button
    const cancelProductButton = newButton(buttonsDiv, ['btn', 'btn-danger'], 'cancelCreateProduct', 'Cancelar')


    cancelProductButton.addEventListener('click', () => {

        divNewProduct.classList.add('hidden')

        if (divNewProduct.classList.contains('hidden')) {
            productName.value = ''
            productPrice.value = ''

            const flavorDiv = document.querySelector('#newFlavorDiv')
            while (flavorDiv.firstChild) {
                flavorDiv.removeChild(flavorDiv.firstChild)
            }
        }
    })

    // add product button
    const modalHeader = document.querySelector('.modal-header')

    
    const newProductButton = newButton(modalHeader, ['btn', 'btn-primary'], 'newProductButton', 'Novo Produto')
 
    
    const divNewProduct = document.querySelector('#newProductDiv')

    newProductButton.addEventListener('click', () => {

        document.querySelector('#editProductDiv').classList.add('hidden')
        divNewProduct.classList.remove('hidden')

    })

}

const newProductFlavor = (div, flavor) => {

    const newFlavorDiv = newDiv(div, ['newFlavorOption'])


    const newFlavorInput = newInput(newFlavorDiv, ['form-control', 'productFlavor'], '', [['type', 'text']], 'Adcione um novo sabor')

    
    if (flavor !== undefined) {
        newFlavorInput.value = flavor
    }


    const btnClose = newButton(newFlavorDiv, ['btn', 'btn-close'])
    btnClose.setAttribute('aria-label', 'Close')


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
            
            const product = {
                name: name,
                price: price,
                type: type,
                flavors: productFlavorList,
                id: idGenerator(productsStorage.length)
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
    
            const productIndex = productsStorage.findIndex((obj) => {return obj.id == id})

            productsStorage[productIndex] = product
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
    

            const productCard = newDiv(productsDiv, ['card'], id)
            const cardHeader = newDiv(productCard, ['card-header'])
            cardHeader.innerText = name


            showEditProduct(generateSvgIcon(cardHeader))
    
            const listGroup = newList('ul', productCard, ['list-group', 'list-group-flush'])


            newListItem(listGroup, ['list-group-item'], `R$ ${parseFloat(price).toFixed(2)}/${type}`)
    
            
            if (flavors.length > 0) {
                const liFlavorHeader = newListItem(listGroup, ['list-group-item', 'list-group-flavor-header'], 'Sabores: ')
            }
    
            for (let flavorsIndex = 0; flavorsIndex < flavors.length; flavorsIndex += 1) {
                const liFlavor = newListItem(listGroup, ['list-group-item', 'list-group-flavor'], '')
                liFlavor.innerHTML = `&#8729 ${flavors[flavorsIndex]}`
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

    const newFlavorDiv = newDiv(div, ['newFlavorOption'])


    const newFlavorInput = newInput(newFlavorDiv, ['form-control', 'editproductFlavor'], '', [['type', 'button']], 'Adcione um novo sabor')


    
    if (flavor !== undefined) {
        newFlavorInput.value = flavor
    }

    const btnClose = newButton(newFlavorDiv, ['btn', 'btn-close'])
    btnClose.setAttribute('type', 'button')
    btnClose.setAttribute('aria-label', 'Close')
    

    btnClose.addEventListener('click', (botaoClicado) => {
        botaoClicado.target.parentNode.remove()
    })

}

const createEditProductOptions = (name, price, type, flavors) => {
    const editProductDiv = document.querySelector('#editProductDiv')

    newH(editProductDiv, 'h5', 'Editar Produto')
    
    const inputNameAndPriceDiv = newDiv(editProductDiv, '', 'inputNameAndPriceProductDiv')

    // product name
    const divName = newDiv(inputNameAndPriceDiv, ['productInput'])
    
    newLabel(divName, ['form-label'], 'editproductNameInput', 'Nome')

    const productName = newInput(divName, ['form-control'], 'editproductNameInput', [['type', 'text']])
    productName.value = name

    // product price
    const divPrice = newDiv(inputNameAndPriceDiv, ['productInput'])
    
    newLabel(divPrice, ['form-label'], 'editproductPriceInput', 'Preço')

    const productPrice = newInput(divPrice, ['form-control'], 'editproductPriceInput', [['type', 'number']])
    productPrice.value = price

    const typeProductDiv = newDiv(editProductDiv, '', 'typeProductDiv')

    // product type unit
    const divTypeUnit = newDiv(typeProductDiv, ['productInput'])
    
    const productUnitType = newInput(divTypeUnit, ['form-check-input'], 'editproductTypeUnit', [['type', 'radio'], ['name', 'productType'], ['value', 'unit']])

    newLabel(divTypeUnit, ['form-label'], 'editproductTypeUnit', 'Unidade')

    if (type === 'unit') {
        productUnitType.setAttribute('checked', 'checked')
    }

    // product type kilo
    const divTypeKilo = newDiv(typeProductDiv, ['productInput'])

    const productKiloType = newInput(divTypeKilo, ['form-check-input'], 'editproductKiloType', [['type', 'radio'], ['name', 'productType'], ['value', 'kilo']])

    newLabel(divTypeKilo, ['form-label'], 'editproductKiloType', 'Quilo')

    if (type === 'kilo') {
        productKiloType.setAttribute('checked', 'checked')
    }

    // flavors
    const addFlavor = newButton(editProductDiv, ['btn', 'btn-secondary'], 'newFlavor', 'Adicionar Sabor')

    const divFlavor = newDiv(editProductDiv, ['productInput'], 'newFlavorDiv')

    if (flavors.length > 0) {
        for (let index = 0; index < flavors.length; index += 1) {
            editProductFlavor(divFlavor, flavors[index])
        }
    }

    // add new flavor
    addFlavor.addEventListener('click', () => {
        editProductFlavor(divFlavor)
    })

    const buttonsDiv = newDiv(editProductDiv, ['editProductButtons'])

    const deleteDiv = newDiv(buttonsDiv, ['deleteDiv'])

    const saveAndCancelDiv = newDiv(buttonsDiv, ['saveAndCancelDiv'])

    newButton(deleteDiv, ['btn', 'btn-danger', 'deleteProduct'], 'deleteProduct', 'Apagar')

    newButton(saveAndCancelDiv, ['btn', 'btn-success', 'saveEditProduct'], 'saveEditProduct', 'Salvar')

    newButton(saveAndCancelDiv, ['btn', 'btn-danger', 'cancelEditProduct'], 'cancelEditProduct', 'Cancelar')
}

const showEditProduct = (buttonClicked) => {  

    buttonClicked.addEventListener('click', () => {

        const productsInLocal = JSON.parse(localStorage.getItem('products'))  

        const productId = buttonClicked.parentNode.parentNode.id

        const productIndex = productsInLocal.findIndex((obj) => {return obj.id == productId})

        const name = productsInLocal[productIndex].name
        const price = productsInLocal[productIndex].price
        const type = productsInLocal[productIndex].type
        const flavors = productsInLocal[productIndex].flavors
        
        const editProductDiv = document.querySelector('#editProductDiv')
        editProductDiv.classList.remove('hidden')
        
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
    const deleteButton = document.querySelector('#deleteProduct')

    saveButton.addEventListener('click', () => {
        const name = document.querySelector('#editproductNameInput').value.toLowerCase()
        const price = document.querySelector('#editproductPriceInput').value.toLowerCase()
        const type = document.querySelector('.editProductDiv input[type="radio"]:checked').value.toLowerCase()
        const flavors = document.querySelectorAll('.editproductFlavor')
        
        saveProduct(name, price, type, flavors, id)
        renderProductsSaveds()

        while (editProductDiv.firstChild) {
            editProductDiv.removeChild(editProductDiv.firstChild)
        }
        editProductDiv.classList.toggle('hidden')
        
        const newProductButtonDiv = document.querySelector('.buttonsProducts')
        newProductButtonDiv.classList.remove('hidden')

    })

    cancelButton.addEventListener('click', () => {
        while (editProductDiv.firstChild) {
            editProductDiv.removeChild(editProductDiv.firstChild)
        }
        editProductDiv.classList.toggle('hidden')
        
        const newProductButtonDiv = document.querySelector('.buttonsProducts')
        newProductButtonDiv.classList.remove('hidden')
    })

    deleteButton.addEventListener('click', () => {
        const storage = JSON.parse(localStorage.getItem('products'))

        const productIndex = storage.findIndex((obj) => {return obj.id == id})

        storage.splice(productIndex, 1)
        
        localStorage.setItem('products', JSON.stringify(storage))

        while (editProductDiv.firstChild) {
            editProductDiv.removeChild(editProductDiv.firstChild)
        }
        editProductDiv.classList.toggle('hidden')
        
        const newProductButtonDiv = document.querySelector('.buttonsProducts')
        newProductButtonDiv.classList.remove('hidden')

        renderProductsSaveds()
    })
}

const idGenerator = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    
    let id = ''
    for (let qtdLetter = 0; qtdLetter < length + 1; qtdLetter += 1) {
        const index = Math.floor(Math.random()*characters.length)
        const number = Math.floor(Math.random()*999999)
        id += characters[index] + number
    }
    return id
}