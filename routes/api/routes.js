const UserRouter = require('express').Router();
const {getAllUsers, addUser, deleteUser} = require('../../controllers/api/user');
const multerUpload = require('../../utils/multer');

UserRouter.get("/", getAllUsers)
UserRouter.post("/",multerUpload.single('profileImage'), addUser)
UserRouter.delete("/:id", deleteUser)

module.exports = UserRouter;