const pedidoCliente = document.querySelector('#pd-cliente').value
const pedidoProduto = document.querySelector('#pd-produto').value
const pedidoQuantidade = document.querySelector('#pd-quantidade').value

function adcionarPedido() {
    localStorage.setItem('nome', pedidoCliente)
    localStorage.setItem('produto', pedidoProduto)
    localStorage.setItem('quantidade', pedidoQuantidade)

    mostrarPedido()
}

function mostrarPedido () {
    let nomeDoCliente = localStorage.getItem('nome')
    let descricaoPedido = localStorage.getItem('produto')
    let quantidadeProduto = localStorage.getItem('quantidade')

    const listaDePedido = document.querySelector('#mostrarPedido')

    listaDePedido.innerText = nomeDoCliente + descricaoPedido + quantidadeProduto
}