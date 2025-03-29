const mongoose = require("mongoose");

const jobsModelSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    sallary: { type: Number, required: true },
    recruiter_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recruiters",
      required: true,
    },
    seekers_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "seekers",
        required: true,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("jobs", jobsModelSchema);
