import express from 'express'
import conexao from '../infra/conexao.js'
import cors from 'cors';
import bodyParser from 'body-parser';








const app = express()

app.use(express.json())

app.use(cors());

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor está ouvindo em http://0.0.0.0:3000');
})

app.post('/usuario/cadastro', (res, req) => {
console.log(req.body);
  
 const {nome, email, senha} = req.body;
  
    conexao.query("SELECT * FROM USUARIO WHERE email = ?", [email],
    (req, res) => {
        if (err) {
            res.send(err);
          }
          if (result.length == 0) {
            
              db.query(
                "INSERT INTO usuarios (email, senha, nome) VALUE (?,?,?)",
                [email, senha, nome],
                (error, response) => {
                  if (err) {
                    res.send(err);
                  }
      
                  res.send({ msg: "Usuário cadastrado com sucesso" });
                }
              );
            
          } else {
            res.send({ msg: "Email já cadastrado" });
          }
        });
      });




export default app