const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// Só pro meu app usar
// app.use(cors({
//   origin: 'http://meuapp'
// }));

// Todas as front acessam esse backend
app.use(cors());

app.use(express.json()); // usar json no corpo
app.use(routes); // usar as rotas do arquivo

app.listen(3333);