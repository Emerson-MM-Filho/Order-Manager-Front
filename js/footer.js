const createFooter = () => {
    const body = document.querySelector('body')
    const footer = document.createElement('footer')

    footer.classList.toggle('mainFooter')
    body.appendChild(footer)
}