const orderList = () => {

    // create the section
    const main = document.querySelector('main')
    const section = document.createElement('section')
    section.classList.toggle('orderListSection')
    main.appendChild(section)

    // create list
    const div = document.createElement('div')
    div.classList.toggle('orderList')
    section.appendChild(div)
}