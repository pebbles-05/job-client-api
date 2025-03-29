const express = require("express");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const router = express.Router();
const jobModel = require("../models/jobs.js");

router.get("/", async (req, res) => {
  const jobs = await jobModel.find();
  res.send(jobs);
});

router.post("/jobs", async (req, res) => {
  try {
    const { name, description, role, sallary, recruiter_id, seekers_ids } =
      req.body;

    const newJob = await jobModel.create({
      name,
      description,
      role,
      sallary,
      recruiter_id: ObjectId(recruiter_id), // Convert to ObjectId
      seekers_ids: seekers_ids.map((id) => ObjectId(id)), // Convert all IDs to ObjectId
    });

    res.send(newJob);
  } catch (error) {
    res.send({ error });
  }
});

module.exports = router;
