// Herramientas de prueba que vienen DENTRO de Node.js (no hay que instalar nada).
const { test } = require('node:test');
const assert = require('node:assert');

// Importamos la función que queremos probar.
const { sumar } = require('../src/calculadora.js');

// Prueba 1: ¿2 + 3 da 5?
test('sumar 2 + 3 debe dar 5', () => {
  assert.strictEqual(sumar(2, 3), 5);
});

// Prueba 2: ¿funciona con números negativos?
test('sumar -1 + 1 debe dar 0', () => {
  assert.strictEqual(sumar(-1, 1), 0);
});
