 const porta = 3003
 const express = require(`express`)
 const app = express()

 app.post(`/produtos`, (req, res, next) => {
     res.send({ nome: `Notebook`, preco: 12313.22 }) // converter para JSON
 })

 app.listen(porta, () => {
     console.log(`Servidor execultando na porta ${porta}`)
 })