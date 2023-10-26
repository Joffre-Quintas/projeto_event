const express = require('express');
const cors = require('cors')
const route = require('./routes')

const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(route)

app.listen(3000, () => console.log(`Servidor rodando na porta 3000...`) )