// server/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Mount routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// ✅ Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log(err));

// ✅ Lắng nghe server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server chạy tại cổng ${PORT}`));
