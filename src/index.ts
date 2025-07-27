import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import loanRoutes from '../Routes/loanRoutes';
import dotenv from 'dotenv';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
dotenv.config();
app.use('/api/loans', loanRoutes);

const PORT = '3000';
const MONGO_URI = process.env.MONGO_URI as string;

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
