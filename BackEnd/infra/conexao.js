import mysql from 'mysql2'

const conexao = mysql.createConnection({
   host: 'localhost',
   user: 'admin',
   password: '**Eduardo16062006',
   database: 'BLADEWHISKERS'
})

conexao.connect()

export default conexao

