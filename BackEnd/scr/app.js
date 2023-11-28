import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

app.post('/USUARIO', (res, req) => {
   
    const sql = "INSERT INTO USUARIO "


})