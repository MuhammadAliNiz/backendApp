const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const UserRouter = require("./routes/user");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT;

//cors *
app.use(cors(
    {
        origin: "*",
        credentials: true,
    }
));
app.use("/public",express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UserRouter);

app.get("/", (req, res) => {res.send("Hello World!")});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is Online!");
  console.log(`http://localhost:${PORT}/`);
});
