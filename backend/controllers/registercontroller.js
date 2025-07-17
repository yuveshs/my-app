
import User from "../data/userdata.js";
export async function getalluser(req, res) {
  try
  {
    const user = await User.find().sort({ createdAt: -1 });
    res.status(200).json(user);
  }
  catch(error)
  {
    res.status(500).json({ message: error.message });
  }
};

export async function adduser (req, res){
    try{
    const{username, password} = req.body;
    const newUser=new User({username, password});
    await newUser.save();
    res.status(201).json("User created successfully");
    }
    catch(error) {
        console.error("user not created:", error);
        res.status(500).json({ message: error.message });
    }
};
export async function updateuser(req, res){
  try
  {
    const {username, password} = req.body;
    await User.findByIdAndUpdate(req.params.id, {username, password}, {new: true});
    res.status(200).json("User updated successfully");
  }
  catch(error)
  {
    res.status(500).json({ message: error.message });// Handle error
  }
  };
export async function deleteuser(req, res){
  try{
    
    const del=await User.findByIdAndDelete(req.params.id);
    if(!del) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json("User deleted successfully");
  }
  catch(error) {
    res.status(500).json({ message: error.message });// Handle error
  }
};