const createMainContent = () => {
    const body = document.querySelector('body')
    const main = document.createElement('main')
    
    main.classList.toggle('mainContent')
    body.appendChild(main)
}