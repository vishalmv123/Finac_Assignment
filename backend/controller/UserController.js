
const User = require('../model/UserSchema');
const bcrypt = require('bcrypt');

exports.UserRegistration =async (req , res)=>{
    const {name ,dob ,  age ,password , gender ,about} = req.body;
    const existingUser = await User.findOne({name});
    try{
        if(!existingUser){
            const saltrounds = 10 ;
            const hashedpassword = await bcrypt.hash(password , saltrounds);
            const newUser =await User.create({name ,dob,  age , password : hashedpassword , gender , about});
           return  res.status(200).json({success : true ,newUser});
        }
        else{
            return res.status(400).json({success : false , message : "User already exists"});
        }
    }
   
    catch(err){
      return   res.status(500).json({success: false , message: err.message})
    }
}

exports.getUser = async(req , res)=>{
    const {name} = req.params;
    try{
        const user = await User.findOne({name});
        if(user){
            return res.status(200).json({success:true , user})
        }
        else{
            return res.status(404).json({success:false , message: "User Not found"});
        }
    }
    catch(e){
        return res.status(500).json({success:false ,message:e.message})
    }
}

exports.listAllUsers = async (req , res)=>{
    try{
        const users = await User.find({});
        if(users){
            return res.status(200).json({success:true , users});
        }
        return res.status(204).json({success : false , message : "No Users found"});
    }
    catch(err){
        return res.status(400).json({success: false ,message: err.message });
    }
}

exports.updateUsers = async (req, res) => {
    const tobeUpdated = req.params.name;
    const { age, dob ,gender, about } = req.body;

    try {
        const user = await User.findOne({ name: tobeUpdated });
        if (user) {
          
            user.age = age;
            user.dob  = dob;
            user.gender = gender;
            user.about = about;

            await user.save(); 

            return res.status(200).json({ success: true, user });
        } else {
            return res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
};

exports.deleteUser = async(req , res)=>{
    const tobeDeleted = req.params.name;
    try{
        const user = await User.findOne({name : tobeDeleted});
        if(user){
            await User.deleteOne({name : tobeDeleted})
            return res.status(200).json({success:true , message:"User removed successfully"});
        }
        else{
            return res.status(404).json({success:false , message:"User Not found"});
        }

    }
    catch(err){
        return res.status(400).json({success:false ,message:err.message});
    }
}
