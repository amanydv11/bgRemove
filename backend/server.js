import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import videoRoutes from './routes/videoRoute.js'
import connectCloudinary from './config/cloudinary.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config();
const app = express();
mongoose
.connect(
    process.env.MONGO_URI
)
.then(()=>{
    console.log('db connected')
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
connectCloudinary()
app.use(cors())
app.use('/api/auth',authRoutes)
app.use('/api/video',videoRoutes)


const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server connected ${PORT}`)
});

app.use((err, req, res) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });