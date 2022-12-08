import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import itemRoutes from './routes/items.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/items', itemRoutes);

app.get('/', (req, res) => {
  res.send('Hello to the Houses and Humans Mobile API');
});

const PORT = process.env.PORT || 5000;

// Supress Deprecation Console Warnings
mongoose.set('strictQuery', true);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
