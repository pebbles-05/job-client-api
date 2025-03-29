const mongoose = require("mongoose");

const recruitersModelSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: false },
    description: { type: String, required: true },
    job_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobs",
        required: true,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("recruiters", recruitersModelSchema);
