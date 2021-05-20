const createHeader = () => {
  const body = document.querySelector('body')
  const header = document.createElement('header')
  
  header.classList.toggle('mainHeader')
  body.appendChild(header)
}