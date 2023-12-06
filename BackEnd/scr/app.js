import express from 'express'
import conexao from '../infra/conexao.js'
import cors from 'cors';




const app = express()

app.use(express.json())

app.use(cors());

// ROTA MOSTRAR USUARIOS

app.get('/users', (req, res) => {
 
  const usersInfo = req.body
  const sql2 = 'SELECT * FROM USUARIO'

  conexao.query(sql2, usersInfo, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      if(result.length == 0){
        console.log('')
        console.log('AVISO: Nenhum usuario registrado!')
      }
      res.status(200).json(result);
    }
  })
})

// ROTA CADASTRO

app.post('/usuario/cadastro', (req, res) => {
  
  const regisUserInfo = req.body
  const sql2 =  'INSERT INTO usuario SET ?'
  conexao.query(sql2, regisUserInfo, (err, result) => {
      if(err) {
        console.log(err);
        console.log('')
        console.log('ALERTA: Erro ao cadastrar-se, Tente Novamente!');
      } else {
        console.log('')
        console.log('Cadastro Realizado!');
        res.status(200).json(result);
      }
  });
});





// ROTA LOGIN

app.get('/usuario/login/:email', (req, res) => {
  
  const senha = req.body.senha
  const email = req.params.email
  const sql2 = 'SELECT * FROM USUARIO WHERE email = ? AND senha = ?'

  
  
  conexao.query(sql2, [email,senha], (err, result) => {
    if(err) {
      console.log(err)
    } else {
      if (result.length === 0) {
        res.status(401).json(result);
        console.log('AVISO: Credenciais Incorrretas!')
      } else {
        res.status(200).json();
        console.log('Login Realizado!')
      }
    }
  }) 
})


// ROTA EXCLUIR CONTA 

app.delete('/usuario/delete/:userID', (req, res) => {

  const userID = req.params.userID
  const sql2 = 'DELETE FROM USUARIO WHERE id_usuario = ?'
  
  conexao.query(sql2, userID, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).json(result);
      console.log('')
      console.log('AVISO: Usuario removido!');
    }
  })
})


// ROTA CRIAR AGENDAMENTO

app.post('/usuario/criar/agendamento/:idUser', (req, res) => {

  const idUser = req.params.idUser
  const agendamentoData = req.body

  const sql2 = 'INSERT INTO AGENDAMENTO SET ?'

  conexao.query(sql2, [agendamentoData], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).json(result);
      const agendamentoId = result.insertId;
      setDataInForeignKey(idUser,agendamentoId);
    }
  })
})

function setDataInForeignKey(idUser,agendamentoId, res){
  console.log(agendamentoId);
  const sql3 = 'UPDATE USUARIO SET agendamento_idForeignKey = ? WHERE id_usuario = ?';

  conexao.query(sql3, [agendamentoId, idUser], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
      console.log('AVISO: Id inserido!');
    }
  });
}
  
  
 



 

// ROTA EXCLUIR AGENDAMENTO

app.get('/usuario/agendamento/delete/:idAgendamento', (req, res) => {
   
  const idAgendamento = req.params.idAgendamento
   const sql2 = 'SELECT id_usuario FROM USUARIO WHERE agendamento_idForeignKey = ? '
  conexao.query(sql2, [idAgendamento], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).json(result);
      const userIDAgendamento = result[0].id_usuario
      console.log(userIDAgendamento);
      excluirForeignKey(userIDAgendamento,idAgendamento);
    }  
  })
})

  function excluirForeignKey(userIDAgendamento ,idAgendamento, res){
   console.log('CHEGOU AQUI O ID AE: ' + userIDAgendamento + idAgendamento)
   const sql3 = 'UPDATE USUARIO SET agendamento_idForeignKey = null WHERE id_usuario = ?';

   conexao.query(sql3, [userIDAgendamento], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      
      res.status(200).json(result);
      console.log('AVISO: id_foreignKey excluido!');
      excluirAgendamento(idAgendamento);
    }
   });
  }

  function excluirAgendamento(idAgendamento , res){
    console.log('CHEGOU AQUI O ID 2 AE: ' + idAgendamento);
    const sql4 = 'DELETE FROM AGENDAMENTO WHERE id_agendamento ?'

    conexao.query(sql4, [idAgendamento], (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.status(200).json(result);
        console.log('Agendamento Excluido');
      }
    })
  }


  


export default app