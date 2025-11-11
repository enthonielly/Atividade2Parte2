const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;
function resumoPedidos(pedidosJSON) {
  const obj = JSON.parse(pedidosJSON);
  const listaPedidos = obj.pedidos;
  let entregues = 0;
  let emProcessamento = 0;
  let valorTotal = 0;
  for (let i = 0; i < listaPedidos.length; i++) {
    const pedido = listaPedidos[i];
    if (pedido.status === "entregue") {
      entregues++;
    } else if (pedido.status === "processando") {
      emProcessamento++;
    }
    valorTotal += pedido.total;
  }
  const valorFormatado = valorTotal.toFixed(2).replace(".", ",");
  const resumo = `${entregues} pedidos entregues, ${emProcessamento} em processamento. Valor total: R$ ${valorFormatado}`;
  console.log(resumo);
  return resumo;
}
resumoPedidos(pedidosJSON);

