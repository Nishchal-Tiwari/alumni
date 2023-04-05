const sqlite3 = require('sqlite3').verbose();
const data=require('./main');
global.db = new sqlite3.Database('./database.db',function(err){
    if(err){
      console.error(err);
      process.exit(1); //Bail out we can't connect to the DB
    }else{
      console.log("Database connected");
      global.db.run("PRAGMA foreign_keys=ON"); //This tells SQLite to pay attention to foreign key constraints
    }
  });

data.map(d=>{
    global.db.run(
        "INSERT INTO data ('username', 'company','year','branch','image') VALUES( ?, ?,?,?,?);",
        [d.name, d.company, d.year, d.branch, d.img],
        function (err) {
          if (err) {
            console.log('fuck') //send the error on to the error handler
          } else {
            console.log('hooray')
          }
        }
      );
    })
    



