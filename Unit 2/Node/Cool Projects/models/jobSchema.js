const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      require: [true, 'Must provide a company'],
      maxlength: [50, 'Must be less than 50 chars'],
    },
    position: {
      type: String,
      require: [true, 'Must provide a position'],
      maxlength: [100, 'Must be less than 100 chars'],
    },
    status: {
      type: String,
      default: 'pending',
      values: ['interview', 'declined', 'pending'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      require: [true, 'Invalid User'],
    },
    // timeStamp: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
