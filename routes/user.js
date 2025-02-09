const UserRouter = require('express').Router();
const {getAllUsers, addUser} = require('../controllers/user');
const multerUpload = require('../utils/multer');

UserRouter.get("/", getAllUsers)
UserRouter.post("/",multerUpload.single('profileImage'), addUser)

module.exports = UserRouter;