import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

app.get('/USUARIO', (res, req) => {
   
    const sql = "SELECT * FROM USUARIO"

    conexao.query(sql,(erro, resultado) => {
       if(erro){
        console.log(erro)
       } else {
        res.json(resultado)
       }
    })
})

export default app