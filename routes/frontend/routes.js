const frontendRouter = require("express").Router();
const {
  welcomePage,
  loginPage,
  registerPage,
  addTasks,
  showTasks,
} = require("../../controllers/frontend/frontendController");
const verifyToken = require("../../middleware/checkLogin");

frontendRouter.get("", welcomePage);
frontendRouter.get("/login", loginPage);
frontendRouter.get("/register", registerPage);

//verify if the user is logged in
frontendRouter.get("/addTasks",verifyToken, addTasks);
frontendRouter.get("/showTasks",verifyToken, showTasks);

module.exports = frontendRouter;
