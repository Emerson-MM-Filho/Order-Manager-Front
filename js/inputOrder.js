const inputOrder = () => {

    // create the section
    const main = document.querySelector('main')
    const section = document.createElement('section')
    section.classList.toggle('inputOrderSection')
    main.appendChild(section)

    // create name input
    const inputName = document.createElement('input')
    inputName.classList.toggle('inputOrder')
    inputName.placeholder = 'Nome'
    section.appendChild(inputName)

    // create order input
    const inputOrder = document.createElement('input')
    inputOrder.classList.toggle('inputOrder')
    inputOrder.placeholder = 'Pedido'
    section.appendChild(inputOrder)

    // create add order button
    const addOrderButton = document.createElement('button')
    addOrderButton.classList.toggle('addOrderButton')
    addOrderButton.innerText = 'Adcionar'
    section.appendChild(addOrderButton)
}