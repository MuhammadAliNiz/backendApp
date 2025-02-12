const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const ApiRouter = require("./routes/api/routes");
const frontendRouter = require("./routes/frontend/routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/public",express.static("public"));

app.use("/", frontendRouter);
app.use("/api", ApiRouter);



app.listen(PORT, () => {
  connectDB();
  console.log("Server is Online!");
  console.log(`http://localhost:${PORT}/`);
});
