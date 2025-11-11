const usuario = {
  nome: "Ana SIlva",
  idade: 30,
  habilidades: ["JavaScript", "React", "Node.js"],
  ativo: true
};
function converterUsuario(usuario) {
  const usuarioJSON = JSON.stringify(usuario);
  const usuarioOriginal= JSON.parse(usuarioJSON);
  console.log("JSON:", usuarioJSON);
  console.log("Retorno para Objeto:", usuarioOriginal);
  return usuarioOriginal;
}
converterUsuario(usuario);

