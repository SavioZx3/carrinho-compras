let produtosNoCarrinho = [];

function adicionar() {
      //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    
    let AdquireQuantidade = document.getElementById("quantidade").value;
    let quantidade = AdquireQuantidade === "" ? 1 : AdquireQuantidade;

      //calcular o preço, o nosso subtotal
    let subTotal = (quantidade * valorUnitario);
    produtosNoCarrinho.push(subTotal);
      
      //adicionando no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML =  carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`
      
      //adicionando o total
     let total = somaCarrinho();
     let mostraTotal = document.getElementById("valor-total");
     mostraTotal.innerHTML = `R$${total}</span>`
}

function somaCarrinho() {
  let soma = 0;
  for (let i = 0; i < produtosNoCarrinho.length; i++) {
      soma += produtosNoCarrinho[i];
  }
  return soma;
}