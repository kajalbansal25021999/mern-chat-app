require("dotenv/config");
const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
const app = express();
app.use(express.json()); //to accept json data

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

connectDB();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
