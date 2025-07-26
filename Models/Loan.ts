import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  fullName: String,
  loantenture: String,
  phone: String,
  address: String,
  loanAmount: String,
  loanReason: String,
  income: String,
   appliedAt: {
    type: Date,
    default: Date.now,  // sets current date/time on creation
  },
  status: {
    type: String,
    default: 'Pending',
  },
});

export const Loan = mongoose.model('Loan', LoanSchema);
