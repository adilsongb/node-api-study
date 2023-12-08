import express from 'express';

const app = express();

// Rota padrão
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

export { app };
