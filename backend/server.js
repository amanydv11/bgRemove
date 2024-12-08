import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import cookieParser from 'cookie-parser';
dotenv.config();
mongoose
.connect(
    process.env.MONGO_URI
)
.then(()=>{
    console.log('db connected')
});

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8000


app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`server connected ${PORT}`)
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });