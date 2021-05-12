const deleteAll = () => {
    const fullOrderList = document.querySelector('.orderList')
  
    while (fullOrderList.firstChild) {
      fullOrderList.removeChild(fullOrderList.firstChild);
    }
  }