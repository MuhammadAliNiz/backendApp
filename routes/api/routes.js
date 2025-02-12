const ApiRouter = require("express").Router();
const {
  login,
  register,
  getAllUsers,
  addUser,
  deleteUser,
} = require("../../controllers/api/user");
const multerUpload = require("../../utils/multer");

//Auth routes
ApiRouter.post("/login", login);
ApiRouter.post("/register", multerUpload.single("profileImage"), register);


ApiRouter.get("/", getAllUsers);
ApiRouter.post("/", multerUpload.single("profileImage"), addUser);
ApiRouter.delete("/:id", deleteUser);

module.exports = ApiRouter;
