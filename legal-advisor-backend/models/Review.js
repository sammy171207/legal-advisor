const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  lawyerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Lawyer', 
    required: true 
  },  // Reference to Lawyer model (the lawyer being reviewed)
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },  // Reference to User model (the user providing the review)
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },  // Rating for the lawyer (1-5 scale)
  comment: { 
    type: String 
  },  // Optional comment about the lawyer's service
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Review', reviewSchema);
