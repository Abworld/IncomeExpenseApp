const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please put some text"],
  },
  amount: {
    type: Number,
    required: [true, " Please insert a positive or a negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transactions", TransactionSchema);
