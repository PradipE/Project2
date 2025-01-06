const pg = require('pg')

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"blogdata",
    password:"Pradip@2001",
    port:"3000"
  })

  module.exports=db;