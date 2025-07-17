import User from "../data/userdata.js";
import bcrypt from "bcryptjs";

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


export async function getoneuser(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
    if (!user) {
        return res.status(201).json({ message: "User not found" });
    }
    if(user.password !== password) {
        return res.status(401).json({ message: "Incorrect password" });
    }
  res.status(200).json({ message: "Login successful", username, password });
  
}


// export async function getoneuser(req, res) {
//   try {
//     const { username, password } = req.body;

//     // Find user by username
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check password
//     //const isMatch = await bcrypt.compare(password, user.password);

//     if (password!== user.password) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }

//     res.status(200).json({ message: "Login successful", user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }
