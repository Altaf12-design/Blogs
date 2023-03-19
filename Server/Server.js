const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8080;
const config = require("./config/config");
const db = require("./models/index");
const userRouter = require("./routes/route");
const authRouter = require("./routes/loginRoute");
const blogRouter = require("./routes/blogRouter");

mongoose.set("strictQuery", true);
const corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(userRouter);
app.use(authRouter);
app.use(blogRouter);

db.mongoose
  .connect(
    `mongodb+srv://${config.userName}:${config.password}@cluster0.tt9fmfb.mongodb.net/?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: config.dbName,
    }
  )
  .then(() => console.log("db is connected...."))
  .catch((err) => console.log("DB connection is fail", err));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
