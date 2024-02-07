const expess = require("express");
const app = expess();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(expess.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employeesystem"
});

// Explicitly connect to the MySQL database
db.connect(err => {
  console.log("connecting database\n")
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }

  console.log('Connected to database as ID ' + db.threadId);
});



app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (result) {
      res.send(result);
    } else {
      console.log(err);
    }
  });
});

app.post("/create", (req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Age = req.body.Age;
  const Country = req.body.Country;
  const Position = req.body.Position;
  const AvatarURL = req.body.Avatar;
//INSERT INTO `employees`(`id`, `fname`, `lname`, `age`, `country`, `position`, `Avertar`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')
  db.query(
    "INSERT INTO employees(fname, lname, age, country, position, Avertar) VALUES(?,?,?,?,?,?) ",
    [FirstName, LastName, Age, Country, Position, AvatarURL],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.put('/employees/:id', async (req, res) => {
  const { id } = req.params; // Get the ID from the URL
  const { FirstName, LastName, Age, Country, Position, Avatar } = req.body; // Get updated values from request body

  const sql = `
      UPDATE INTO employees
      SET FirstName = ?, LastName = ?, Age = ?, Country = ?, Position = ?, Avatar = ?
      WHERE ID = ?
  `;

  db.query(sql, [id,FirstName, LastName, Age, Country, Position, AvatarURL,], (err, result) => {
      if (err) {
          console.error('Error updating data:', err);
          res.status(500).send('Error updating data');
          return;
      }
      if (result.affectedRows === 0) {
          res.status(404).send('Employee not found');
      } else {
          res.send('Employee updated successfully');
      }
  });
});

app.delete('/delete/:id',(req, res) =>{
  const id= req.params.id;
  db.query("DELETE FROM employees WHERE id=?", id,(err, result) => {
    if(err){
      console,log(err);
    }else{
      res.send(result);
    }
  })
})

app.listen("3001", () => {
  console.log("server is runing on port 3001");
});
