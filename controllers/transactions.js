const TransactionSchema = require("../models/Transaction");
// const express = require("express");
// const app = express();
//@ details GET all Transactions
//@route GET /Api/v1/transactions
//@access Public

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await TransactionSchema.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@ details ADD all Transactions
//@route POST /Api/v1/transactions
//@access Public

exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await TransactionSchema.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    //incorportaing validation
    if (err.name === "validationError") {
      const messages = object.values(err.errors).map((val) => val.messages);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

//@ details DELETE all Transactions
//@route DELETE /Api/v1/transaction/:id

exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await TransactionSchema.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
