const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/database/database.db');

db.serialize(() => {
  /* db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
  `)

  const query = `
      INSERT INTO places (
          image,
          name,
          address,
          address2,
          state,
          city,
          items
      ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
      "https://media.istockphoto.com/photos/kids-putting-garbage-into-plastic-containers-of-different-types-picture-id1152580313",
      "Papersider",
      "Guilherme Gemballa",
      "Jardim América Número 260",
      "Santa catarina",
      "Rio do Sul",
      "Papéis e Papelão"
    ]

    function afterInsertData(err) {
        if (err) {
          return console.log(err)
        }
    
        console.log("Cadastrado com sucesso")
        console.log(this)
      }

   db.run(query, values, afterInsertData)


 db.all(`SELECT * FROM places`, function(err, rows) {
    if (err) {
      return console.log(err)
    }

    console.log("Aqui estão seus registros: ")
    console.log(rows)
  }) 

  db.run(`DELETE FROM places WHERE id = ?`, [5], function(err) {
    if (err) {
      return console.log(err)
    }
    console.log("Registros deletado com sucesso: ")

  })

*/
})

module.exports = db;