const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name'],
  },
  price: {
    type: Number,
    required: [true, 'Must provide a price'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos', 'polos'],
      message: '{VALUE} is not supported',
    },
  },
});

module.exports = mongoose.model('Product', productSchema);
