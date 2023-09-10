const mysql = require ('mysql')


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mengtuyuan',
    database:'mengtu_yuan'
})


module.exports = {
    connection
}