// una prueba
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('¡Hola desde Express en Dokploy!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
