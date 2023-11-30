import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

app.post('/usuario/cadastro', (res, req) => {
    
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

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