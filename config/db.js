const mongoose = require("mongoose");
//
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed);
    process.exit(1);
  }
};
//modules

module.exports = connectDB;
