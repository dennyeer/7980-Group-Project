const mongoose = require("mongoose");

const checkinSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    city: {
      type: String,
      required: true
    },
    note: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Checkin", checkinSchema);