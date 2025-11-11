function parseJSONSafe(jsonString) {
  try {
    const resultado = JSON.parse(jsonString);
    return resultado;
  } catch (erro) {
    console.log("JSON inválido");
    return null;
  }
}
const jsonInvalido = '{nome: "João", "idade": 30}'; 
console.log(parseJSONSafe(jsonInvalido)); 
