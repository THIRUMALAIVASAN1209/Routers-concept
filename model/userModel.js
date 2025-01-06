import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name:{
    type:String,
    require: true
  },
  email:{
    type:String,
    require:true
  },
  address:{
    type:String,
    require:true
  }
});

export default mongoose.model("users",userSchema)