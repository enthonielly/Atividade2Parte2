const jsonString = `{
  "usuarios": [
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
  ]
}`;
function extrairEmails(jsonString) {
  const obj = JSON.parse(jsonString);
  const listaUsuarios = obj.usuarios;
  let emails = [];
  for (let i = 0; i < listaUsuarios.length; i++) {
    emails.push(listaUsuarios[i].email);
  }
  const emailsJuntos = emails.join(", ");
  console.log(emailsJuntos);
  return emailsJuntos;
}
extrairEmails(jsonString);
