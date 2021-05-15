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
        div.classList.add(divClass[index])
    }
    if (id !== undefined) {
        div.id = id
    }
    return fatherElement.appendChild(div)
}

const newButton = (fatherElement, buttonClass, id, innerText) => {
    const button = document.createElement('button')
    for (let index = 0; index < buttonClass.length; index += 1) {
        button.classList.add(buttonClass[index])
    }
    button.id = id

    if (innerText !== undefined) {
        button.innerText = innerText
    }

    return fatherElement.appendChild(button)
}