const bcrypt = require("bcrypt");
const connection = require("../config/db");
const jwt = require("jsonwebtoken");

class userControllers {
  //-----------------------------------------------------
  //1. Create new User
  //http://localhost:4000/users/createUser

  createUser = (req, res) => {
    // Get data from inputs
    const { user_name, name, last_name, age, email, password } = req.body;
    console.log(req.body.name);

    let saltRounds = 8;
    // Hashing password
    bcrypt.genSalt(saltRounds, function (err, saltRounds) {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        // Creating insertion to DDBB
        let sql = `INSERT INTO user (user_name ,name , last_name, age , email, password) VALUES ( '${user_name}', '${name}', '${last_name}', ${age}, '${email}', '${hash}')`;

        // Insertion into DDBB
        connection.query(sql, (error, result) => {
          error
            ? res.status(400).json({ error })
            : res.status(201).json(result);
        });
      });
    });
  };

  //-----------------------------------------------------
  //2. Login
  //http://localhost:4000/users/login

  login = (req, res) => {
    let { email, password } = req.body;
    console.log(req.body);
    let sql = `SELECT * FROM user WHERE email = '${email}'`;

    connection.query(sql, (error, result) => {
      console.log(result);

      //If error
      if (error) return res.status(400).json(error);

      //If there is'nt a user with that email
      if (!result || !result.length || result[0].is_deleted == 1) {
        res.status(401).json("Wrong user or not registered");
      } else {
        // If email is registered
        const [user] = result;
        const hash = user.password;

        //Get here the user_id
        const user_id = user.user_id;

        //Compare the password with the one saved bny using bcrypt.compare
        bcrypt.compare(password, hash, (error, response) => {
          if (error) return res.status(400).json(error);

          //If true
          if (response === true) {
            //Set token (JWT)
            const token = jwt.sign(
              //Payload
              {
                user: {
                  id: user_id,
                  type: user.type,
                },
              },
              //Secret word
              process.env.SECRET,

              //Expiration
              { expiresIn: "30d" }
            );
            //Response
            res.status(200).json({ token, user: result[0] });
            //If false
          } else {
            //Response
            res.status(401).json("Wrong user or password");
          }
        });
      }
    });
  };

  //------------------------------------------------------
  //3.-Get all user info
  //http://localhost:4000/users/oneUser/:user_id

  getOneUser = (req, res) => {
    let id = req.params.user_id;

    let sqlUser = `SELECT * FROM user WHERE user_id = ${id} and is_deleted = 0`;
    let sqlBook = `SELECT * FROM book WHERE user_id = ${id} and is_deleted = 0`;

    connection.query(sqlUser, (error, resultUser) => {
      if (error) {
        //if first SQL error
        res.status(400).json({ error });
      }
      //if first SQL ok -- second SQL
      connection.query(sqlBook, (error2, resultBook) => {
        if (error2) {
          //If second SQL error
          res.status(400).json({ error2 });
        }
        //If everything ok
        res.status(200).json({ resultUser, resultBook });
      });
    });
  };
}

module.exports = new userControllers();
