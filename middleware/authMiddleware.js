import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    token = token.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export { protect };



export const requireSignIn = async (req, res, next) => {
    

    try {
        let token = req.headers.authorization;

        if (!token || !token.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        // Extract only the token part
        token = token.split(" ")[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find user and attach it to request
        req.user = await userModel.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

     
        next();

    } catch (error) {
        console.error("❌ Error in requireSignIn:", error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};


//admin access
export const isAdmin=async(req,res,next)=>{
  
    try {
       
        const user=await userModel.findById(req.user.id)
   
        if(user.role!==1 )
        {
          
            return res.status(401).send({success:false,message:"UnAuthorized Access U r not the AdminDharma...!"})
        }
        else if(user.role==1){
            next();
        }
        
    }catch (error) {

        console.log(error)
        res.status(401).send({success:false,message:"You are not an Admin , UnAuthorized Access...!",error})
        
    }

}

//Super admin access
export const isSuperAdmin=async(req,res,next)=>{
    try {

        const user=await userModel.findById(req.user._id)
        
        if(user.role!==2)
        {
            return res.status(401).send({success:false,message:"UnAuthorized Access You Are not  Super Admin..!"})
        }
        else{
            next();
        }
        
    }catch (error) {

        console.log(error)
        res.status(401).send({success:false,message:"You are not an Super Admin , UnAuthorized Access...!",error})
        
    }
  
}
//staff access

export const isStaff =async(req,res,next)=>{
    try {
                 
        const user = await userModel.findById(req.user._id).populate("admin")
          
        if(user.role!==0  ||  user.admin.status!=="Active")  
        {
            return res.status(401).send({success:false,message:"UnAuthorized Access U r not the Admin...!"})
        }
        else{
            next();
        }
         
    }catch (error) {
     
      
        res.status(401).send({success:false,message:"You r not an Staff , UnAuthorized Access...!",error})
                    
    }
}


export const isStudent =async(req,res,next)=>{
    try {
                 
        const user = await userModel.findById(req.user.id)
          
        if(user.role!==0 )  
        {
            return res.status(401).send({success:false,message:"UnAuthorized Access U r not the Admin...!"})
        }
        else{
            next();
        }
         
    }catch (error) {
     
      
        res.status(401).send({success:false,message:"You r not an Staff , UnAuthorized Access...!",error})
                    
    }
}


