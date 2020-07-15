const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const path = require('path');
const { errors } = require('celebrate');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use('/uploads', express.static(
  path.resolve(__dirname, '..', 'uploads')));




// notFound Rotas não encontrada
app.use((request, response, next) => {
  const error = new Error('Not found')
  error.message;
  next(error)
})

// catch all
app.use((error, request, response, next) => {
  response.status(error.status || 500)
  response.json({ error: error.message })
})


app.listen(3333, () => console.log('Serven Up and running'));
