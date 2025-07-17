import User from "../data/userdata.js";

export async function getuser(req, res) {
    try{
    const user=await User.findById(req.params.id);
    if(!user) {
        res.status(404).json({ message: "User not found" });
    }
    else{
        res.status(200).json(user);
    }
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};