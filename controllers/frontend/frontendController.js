const path = require("path");

const welcomePage = (req, res) => {
  // send html file welcome.html
  res.sendFile(path.join(__dirname, "../../views", "welcome.html"));
};

const loginPage = (req, res) => {
    // send html file welcome.html
    res.sendFile(path.join(__dirname, "../../views","auth", "login.html"));
  };
  const registerPage = (req, res) => {
    // send html file welcome.html
    res.sendFile(path.join(__dirname, "../../views","auth", "register.html"));
  };
  const addTasks = (req, res) => {
    // send html file welcome.html
    res.sendFile(path.join(__dirname, "../../views","tasks", "addTasks.html"));
  };

  const showTasks = (req, res) => {
    // send html file welcome.html
    res.sendFile(path.join(__dirname, "../../views","tasks", "showTasks.html"));
  };

module.exports = {
  welcomePage,
  loginPage,
  registerPage,
  addTasks,
  showTasks,
};
