const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");

//BASE_ROUTE http://localhost:4000/users/

//-----------------------------------------------------
//1.-Create new User
//http://localhost:4000/users/createUser
router. post("/createUser", userControllers.createUser);

//-----------------------------------------------------
//2.-Login
//http://localhost:4000/users/login
router. post("/login", userControllers.login);

//------------------------------------------------------
//3.-Get all data from user 
//http://localhost:4000/users/oneUser/:user_id  
router.get("/oneUser/:user_id", userControllers.getOneUser);

//------------------------------------------------------
//4.-Edit user data
//http://localhost:4000/users/oneUser/userEdition/:user_id  
router.post("/oneUser/userEdition/:user_id",multerSingle("user"), userControllers.editOneUser);

module.exports = router;