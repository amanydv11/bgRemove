import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import {errorHandler} from '../error.js'
import jwt from 'jsonwebtoken'


export const signup = async(req,res,next)=>{
    const {username,email,password}= req.body;

if(!username || !password || !email){
    next(errorHandler(400,'All fields are required'));
}
const hashedPassword = await bcrypt.hash(password,10);
const newUser = new User({
    username,
    email,
    password:hashedPassword,
})
try {
    await newUser.save();
    res.json({message:'User Created'})
} catch (error) {
    next(error)
}

}
export const login = async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        next(errorHandler(400,'All fields are required'))
    }
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            next(errorHandler(400,'Something went wrong'));
        }
        const validPassword  = bcrypt.compareSync(password,validUser.password);
        if(!validPassword){
            next(errorHandler(404,'something went wrong'))
        }
        const token = jwt.sign(
            {id:validUser._id},process.env.JWT_SECRET
        )
        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(validUser)
          
    } catch (error) {
        next(error)
    }
}
export const signout = async(req,res,next)=>{
    try {
        res.clearCookie('access_token').status(200).json('User has been signed out')
    } catch (error) {
        next(error)
    }
}