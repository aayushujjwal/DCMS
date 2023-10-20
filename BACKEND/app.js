const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Create connection
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "dcms",
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql2 Connected...");
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO USER(`USERNAME`, `PASSWORD`, `EMAIL`, `PHONE_NO`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.password,
    req.body.email,
    req.body.phone,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/contact", (req, res) => {
  const sql =
    "INSERT INTO CONTACTUS(`NAME`, `EMAIL`, `MESSAGE`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.message,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  
  const sql = `SELECT * FROM user WHERE EMAIL = "${req.body.email}" AND PASSWORD =  "${req.body.password}"`;
  
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Invalid");
    }
  });
});

app.post("/admin", (req, res) => {
  
  const sql = `SELECT * FROM admin WHERE EMAIL = "${req.body.email}" AND PASSWORD =  "${req.body.password}"`;
  
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Invalid");
    }
  });
});

app.post('/insertmtype', (req, res) => {
  const sql = `INSERT INTO membership_type (MEM_LEVEL, PRICE, DURATION) VALUES (?)`;
  const values = [
    req.body.level,
    req.body.price,
    req.body.duration];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.post('/insertinstructors', (req, res) => {
  const sql = `INSERT INTO instructors (NAME, EXPERTISE, JOIN_DATE,PHONE_NO) VALUES (?)`;
  const values = [
    req.body.name,
    req.body.expertise,
    req.body.join_date,
    req.body.phone_no];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.post('/insertmembers', (req, res) => {
  const sql = `INSERT INTO members (NAME, JOIN_DATE, MSHIP_TYPE,PHONE_NO) VALUES (?)`;
  const values = [
    req.body.name,
    req.body.join_date,
    req.body.mship_type,
    req.body.phone_no];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.put(`/updatemtype/:id`, (req, res) => {
  const sql = `UPDATE membership_type set MEM_LEVEL = ?, PRICE = ?, DURATION = ? WHERE MEM_LEVEL= ?`;
  const id = req.params.id;
  const values = [
    req.body.level,
    req.body.price,
    req.body.duration];
    
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.put(`/updateinstructors/:id`, (req, res) => {
  const sql = "UPDATE instructors set `NAME` = ?, `EXPERTISE` = ?, `JOIN_DATE` = ?, `PHONE_NO` = ? WHERE INSTRUCTORS_ID= ?";
  const id = req.params.id;
  const values = [
    req.body.name,
    req.body.expertise,
    req.body.join_date,
    req.body.phone_no];
    
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.put(`/updatemembers/:id`, (req, res) => {
  const sql = "UPDATE members set `NAME` = ?, `JOIN_DATE` = ?, `MSHIP_TYPE` = ?, `PHONE_NO` = ? WHERE MEMBER_ID= ?";
  const id = req.params.id;
  const values = [
    req.body.name,
    req.body.join_date,
    req.body.mship_type,
    req.body.phone_no];
    
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.delete(`/mtype/:id`, (req, res) => {
  const sql = "DELETE FROM membership_type WHERE MEM_LEVEL= ?";
  const id = req.params.id;
    
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.delete(`/instructors/:id`, (req, res) => {
  const sql = "DELETE FROM instructors WHERE INSTRUCTORS_ID = ?";
  const id = req.params.id;
    
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.delete(`/users/:id`, (req, res) => {
  const sql = "DELETE FROM user WHERE USER_ID = ?";
  const id = req.params.id;
    
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.delete(`/members/:id`, (req, res) => {
  const sql = "DELETE FROM members WHERE MEMBER_ID = ?";
  const id = req.params.id;
    
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.get("/mtype", (req, res) => {
  const sql = `SELECT * FROM membership_type`;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})

app.get("/login", (req, res) => {
  const sql = `SELECT * FROM user`;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
})



app.get('/instructors', (req, res) => {
  const { search } = req.query;
  let query = 'SELECT * FROM instructors';
  
  if (search) {
    query += ` WHERE name LIKE '%${search}%'`;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching instructors: ', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/members', (req, res) => {
  const { search } = req.query;
  let query = 'SELECT * FROM members';
  
  if (search) {
    query += ` WHERE name LIKE '%${search}%'`;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching members: ', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

app.listen("8081", () => {
  console.log("Server started on port 8081");
});

