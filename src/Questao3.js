const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;
function produtosAcimaDe50(produtosJSON) {
  const obj = JSON.parse(produtosJSON);
  const listaProdutos = obj.produtos;
  let nomes = [];
  for (let i = 0; i < listaProdutos.length; i++) {
    if (listaProdutos[i].preco > 50) {
      nomes.push(listaProdutos[i].nome);
    }
  }
  console.log(nomes);
  return nomes;
}
produtosAcimaDe50(produtosJSON);
