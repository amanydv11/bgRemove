import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import connectCloudinary from './config/cloudinary.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
const app = express();
mongoose
.connect(
    process.env.MONGO_URI
)
.then(()=>{
    console.log('db connected')
});


const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
connectCloudinary()



app.use('/api/auth',authRoutes)
app.use(express.static(path.join(__dirname,'/frontend/dist')));
app.get('*',(res,req)=>{
app.sendFile(path.join(__dirname, 'frontend','dist','index.html'))
})


const PORT = process.env.PORT || 8000
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