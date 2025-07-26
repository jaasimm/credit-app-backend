import express from 'express';
import { Loan } from '../Models/Loan';

const router = express.Router();

// Create new loan
router.post('/', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    const savedLoan = await loan.save();
    res.status(201).json(savedLoan);
  } catch (error) {
    res.status(500).json({ error: 'Error saving loan Application' });
  }
});

// Get all loans
router.get('/', async (_req, res) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching loans Application' });
  }
});


// PATCH /api/loans/:id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedLoan = await Loan.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedLoan) return res.status(404).send('Loan not found');

    res.json(updatedLoan);
  } catch (err) {
    console.error('Error updating loan:', err);
    res.status(500).send('Server error');
  }
});


export default router;
