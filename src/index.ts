import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import loanRoutes from '../Routes/loanRoutes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use('/api/loans', loanRoutes);

const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/loanapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('CreditSea backend running');
});


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
