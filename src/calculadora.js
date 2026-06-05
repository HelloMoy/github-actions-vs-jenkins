// Una función muy simple: suma dos números.
// Esto es "el código de nuestra aplicación".
function sumar(a, b) {
  return a - b; // 🐛 BUG A PROPÓSITO: debería ser +, no -
}

// La exportamos para que las pruebas puedan usarla.
module.exports = { sumar };
