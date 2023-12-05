import express from 'express'
import conexao from '../infra/conexao.js'
import cors from 'cors';



const app = express()

app.use(express.json())

app.use(cors());

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor está ouvindo em http://0.0.0.0:3000');
})

app.post('/usuario/cadastro', (res, req) => {
console.log(req.body);
  
 const nome = req.body;
 const sql =  "INSERT INTO usuarios (nome) VALUE ?"
  //const sql = "SELECT * FROM USUARIO WHERE email = ?"
    conexao.query(sql, nome, (err, result) => {
        if(err) {
          console.log(err);
        } else {
          res.status(200).json(result);
        }

    
    
      // if (err) {
      //  res.send(err);
      //}
      //if (result.length == 0) {
      //  
      //    conexao.query(
      //      "INSERT INTO usuarios (email, senha, nome) VALUE (?,?,?)",
      //      [email, senha, nome],
      //      (error, response) => {
      //        if (err) {
      //          res.send(err);
      //        }
      //
      //        res.send({ msg: "Usuário cadastrado com sucesso" });
      //      }
      //    );
      //  
      //} else {
      //  res.send({ msg: "Email já cadastrado" });
      //}
    });
  });




export default app