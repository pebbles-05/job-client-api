const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const mongodb = require("./config/mongodb");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

const jobsRouter = require("./routes/jobs.js");
const recruitersRouter = require("./routes/recruiters.js");
const seekersRouter = require("./routes/seekers.js");

app.listen(3000, (req, res) => {
  console.log("server running");
});

app.get("/", (req, res) => {
  res.send({ status: "running" });
});

app.use("/jobs", jobsRouter);
app.use("/recruiter", recruitersRouter);
app.use("/seekers", seekersRouter);
