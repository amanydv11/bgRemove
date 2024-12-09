import mongoose from 'mongoose'
const uploadSchema = new mongoose.Schema({
    video:{
        type:String,
        require:true,
    }
},{timestamps:true})
const UpFile = mongoose.model('UpFile',uploadSchema)
export default UpFile