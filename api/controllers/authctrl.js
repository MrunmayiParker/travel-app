import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register = async (req,res,next) =>{
    try{

        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newuser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,

        })
    await newuser.save()
    res.status(200).send("user created")
    }catch(err){
        next(err);
    }
}

export const login = async (req,res,next) =>{
    try{
        const user = await User.findOne({ username:req.body.username });
        if(!user) return next(createError(404, "user not found"));

       
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
            );
        if(!isPasswordCorrect) 
            return next(createError(404, "incorrect password"));
        
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin }, process.env.JWT);

        const {password, isAdmin, ...otherDetails} = user;
        res.cookie("access_token", toke, {
            httpOnly: true,
        } ).status(200).json({...otherDetails});

    // res.status(200).json(user)
    // }catch(err){
    //     next(err);
    // }
}