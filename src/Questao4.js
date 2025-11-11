const endereco = {
  rua: "Av. Paulista",
  numero: 1000,
  cidade: "São Paulo",
  cep: "01310-100"
};
function formatarEndereco(endereco) {
  const texto = `${endereco.rua}, ${endereco.numero} - ${endereco.cidade} - CEP: ${endereco.cep}`;
  console.log(texto);
  return texto;
}
formatarEndereco(endereco);

