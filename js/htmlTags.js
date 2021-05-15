const newSection = (fatherElement, sectionClass, id) => {
    const section = document.createElement('section')
    for (let index = 0; index < sectionClass.length; index += 1) {
        section.classList.add(sectionClass[index])
    }
    if (id !== undefined) {
        section.id = id
    }
    return fatherElement.appendChild(section)
}

const newDiv = (fatherElement, divClass, id) => {
    const div = document.createElement('div')
    for (let index = 0; index < divClass.length; index += 1) {
        if (divClass[index] !== '') {     
            div.classList.add(divClass[index])
        }
    }
    if (id !== undefined) {
        div.id = id
    }
    return fatherElement.appendChild(div)
}

const newButton = (fatherElement, buttonClass, id, text) => {
    const button = document.createElement('button')
    for (let index = 0; index < buttonClass.length; index += 1) {
        button.classList.add(buttonClass[index])
    }
    
    if (id !== undefined) {
        button.id = id
    }

    if (text !== undefined) {
        button.innerText = text
    }

    return fatherElement.appendChild(button)
}

const newInput = (fatherElement, inputClass, id, type, inputPlaceholder) => {
    const input = document.createElement('input')

    for (let index = 0; index < inputClass.length; index += 1) {
        if (inputClass[index] !== '') {
            input.classList.add(inputClass[index])
        }
    }

    if (id !== '') {
        input.id = id
    }

    for (let index = 0; index < type.length; index += 1) {
        input.setAttribute(type[index][0], type[index][1])
    }
    
    if (inputPlaceholder !== undefined) {
        input.placeholder = inputPlaceholder
    }

    return fatherElement.appendChild(input)
}

const newLabel = (fatherElement, labelClass, labelFor, text) => {
    const label = document.createElement('label')

    for (let index = 0; index < labelClass.length; index += 1) {
        if (labelClass[index] !== '') {
            label.classList.add(labelClass[index])
        }
    }

    label.setAttribute('for', labelFor)
    label.innerText = text
    return fatherElement.appendChild(label)
}

const newH = (fatherElement, type, text) => {
    const hType = `h${type}`
    const h = document.createElement(hType)
    h.innerText = text

    return fatherElement.appendChild(h)
}