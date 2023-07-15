var express = require("express");
const userControllers = require("../controllers/userControllers");
var router = express.Router();
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");

//BASE_ROUTE http://localhost:4000/users/

//-----------------------------------------------------
//1. Create new User
//http://localhost:4000/users/createUser
router. post("/createUser", userControllers.createUser);

//-----------------------------------------------------
//2. Login
//http://localhost:4000/users/login
router. post("/login", userControllers.login);

//------------------------------------------------------
//3.-Get all user info
//http://localhost:4000/users/oneUser/:user_id  
router.get("/oneUser/:user_id", userControllers.getOneUser);

module.exports = router;