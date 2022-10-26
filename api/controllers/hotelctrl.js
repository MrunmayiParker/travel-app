import hotel from "../models/hotel.js";

export const createhotel = async (req,res,next) => {
    const newhotel = new hotel(req.body);
    try{
        const savedhotel = await newhotel.save();
        res.status(200).json(savedhotel);
    }catch(err){
        next(err);
    }
}


export const updatehotel = async (req,res,next) => {
    try{
        const updatedhotel = await hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new: true})
        res.status(200).json(updatedhotel)
    }catch(err){
        next(err);
    }
}

export const deletehotel = async (req,res,next) => {
    try{
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel deleted")
    }catch(err){
        next(err);
    }
}

export const gethotel = async (req,res,next) => {
    try{
        // const { id } = useParams();
        const hotels = await hotel.findById(req.params.id);
        res.status(200).json(hotels)
    }catch(err){
        next(err);
    }
}

export const getallhotel = async (req,res,next) => {
    // const failed = true;
    // const err = new Error();
    // err.status  = 404;
    // err.message= "not found";
    // if(failed) return next(createerror(401, "not auth"));
    try{
        const allhotels = await hotel.find();
        res.status(200).json(allhotels)
    }catch(err){
       next(err)
    }
}