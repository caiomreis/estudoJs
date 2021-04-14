 const porta = 3003

 const express = require('express')
 const app = express()
 const bodyParser = require('body-parser')
 const BancoDeDados = require('./bancoDeDados.js')

 app.use(bodyParser.urlencoded({ extended: true }))

 app.get(`/produtos`, (req, res, next) => {
     res.send(BancoDeDados.getProdutos()) // converter para JSON
 })

 app.get('/produtos/:id', (req, res, next) => {
     res.send(BancoDeDados.getProduto(req.params.id))
 })

 app.post('/produtos', (req, res, next) => {
     const produto = BancoDeDados.salvarProduto({
         nome: req.body.nome,
         preco: req.body.preco
     })
     res.send(produto) // JSON
 })

 app.put('/produtos/:id', (req, res, next) => {
     const produto = BancoDeDados.salvarProduto({
         id: req.params.id,
         nome: req.body.nome,
         preco: req.body.preco
     })
     res.send(produto) // JSON
 })
 app.delete('/produtos/:id', (req, res, next) => {
     const produto = BancoDeDados.excluirProduto(
         req.params.id
     )
     res.send(produto) // JSON
 })

 app.listen(porta, () => {
     console.log(`Servidor execultandos na porta ${porta}`)
 })