const frontendRouter = require("express").Router();
const {
  welcomePage,
  loginPage,
  registerPage,
  addTasks,
  showTasks,
} = require("../../controllers/frontend/frontendController");

frontendRouter.get("", welcomePage);
frontendRouter.get("/login", loginPage);
frontendRouter.get("/register", registerPage);
frontendRouter.get("/addTasks", addTasks);
frontendRouter.get("/showTasks", showTasks);

module.exports = frontendRouter;
