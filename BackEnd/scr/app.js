import express from 'express'
import conexao from '../infra/conexao.js'
import cors from 'cors';



const app = express()

app.use(express.json())

app.use(cors());

// ROTA CADASTRO

app.get('/users', (req, res) => {
 
  const usersInfo = req.body
  const sql2 = 'SELECT * FROM USUARIO'

  conexao.query(sql2, usersInfo, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  })
})


app.post('/usuario/cadastro', (req, res) => {
  
  const regisUserInfo = req.body
  const sql2 =  'INSERT INTO usuario SET ?'
  conexao.query(sql2, regisUserInfo, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.status(200).json(result);
      }
  });
});





// ROTA LOGIN

app.get('/usuario/login/:email', (req, res) => {
  
  const senha = req.body
  const email = req.params.email
  const sql2 = 'SELECT * FROM USUARIO WHERE email = ? AND ?'
  
  
  conexao.query(sql2, [email,senha], (err, result) => {
    if(err) {
      console.log(err)
      console.log('Login negado!')

    } else {
      if(result = null){

        
      }
      res.status(200).json(result);
      console.log('Login realizado!')
    }
  }) 
})







export default app