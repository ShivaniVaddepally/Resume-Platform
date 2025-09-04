import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import resumeRoutes from './routes/resumes.js';

const app = express();
app.use(express.json());

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));

app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);

const start = async () => {
  await connectDB();
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

start();
