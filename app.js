// using the sqlite3 lib
const sqlite3 = require('sqlite3').verbose();
// connected to the db
let db = new sqlite3.Database('first.db', (err) => {
  if(err) {
    console.error(err.message);
  }
  console.log('Connected to the first database');
});

// fire select query
db.serialize(() => {
  db.each(`SELECT * FROM COMPANY`, (err, row) => {
    if(err) {
      console.error(err.message);
    }
    console.table(row);
  });
});

// close connector
db.close((err) => {
  if(err) {
    console.error(err.message)
  }
  console.log('Close the db connection!')
})